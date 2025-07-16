const {
  sendPostGridLetter,
  createPostGridWebHook,
  sendPostGridPostCard,
  cancelPostGridMail,
} = require("../../services/postgridServices")
const {
  SEND_MAIL_LETTER_TYPE,
  SEND_MAIL_POSTCARD_TYPE,
  POSTGRID_SECRET_KEY,
} = require("../../constant/constants")
const {
  savePrintMailData,
  fetchPrintMailById,
  fetchPrintMailByUserId,
  fetchPrintMailByMailId,
} = require("../../helper/printMail")
const { sendNotification } = require("../../helper/sendNotification")
const fs = require("fs")
const jwt = require("jsonwebtoken")
const { logger } = require("../../utils/logger")

const sendNewPrintMail = async (req, res) => {
  const payload = req.body
  const mailType = req.params.mailType
  const userId = req.userId
  const file = req.file
  try {
    let response
    switch (mailType) {
      case SEND_MAIL_LETTER_TYPE:
        response = await sendPostGridLetter(payload, userId, file)
        break
      case SEND_MAIL_POSTCARD_TYPE:
        response = await sendPostGridPostCard(payload, userId, file)
        break
      default:
        return res.status(500).json({ message: "Something went wrong." })
    }
    if (response.data) {
      let printData = {
        userId: userId,
        mailType: mailType,
        mailId: response.data.id,
        mailData: response.data,
      }
      const printmail = await savePrintMailData(printData)
      if (printmail) {
        await sendNotification({
          user: req.userDetails,
          message: "Order",
          emailMessage: `<p>Order.</p>`,
          emailSubject: "Order",
        })
        return res.status(200).json({ data: printmail })
      }
    } else {
      return res.status(500).json({ message: `Failed to send ${printType}` })
    }
  } catch (error) {
    const err = { message: 'Failed to send letter/postcard', error: error?.response?.data?.error || error?.response?.data }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path)
    }
  }
}

const cancelMail = async (req, res) => {
  const payload = req.body
  const id = req.params.id
  const userId = req.userId
  try {
    const mailData = await fetchPrintMailById(id, userId)
    if (!mailData) {
      return res.status(400).json({ message: "Mail data not found" })
    }
    const cancelledMail = await cancelPostGridMail(payload, mailData)
    mailData.mailData = cancelledMail.data
    mailData.save()
    await sendNotification({
      user: req.userDetails,
      message: "Cancel mail",
      emailMessage: `<p>Cancel mail.</p>`,
      emailSubject: "Cancel mail",
    })
    return res.status(200).json({ data: mailData })
  } catch (error) {
    const err = { message: 'Failed to cancel letter/postcard', error: error?.response?.data?.error || error?.response?.data }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  }
}

const createWebHook = async (req, res) => {
  const payload = req.body
  const userId = req.userId
  try {
    const response = await createPostGridWebHook(payload, userId)
    if (response.data) {
      await sendNotification({
        user: req.userDetails,
        message: "Mail",
        emailMessage: `<p>Mail.</p>`,
        emailSubject: "Mail",
      })
      return res.status(200).json({ data: response.data })
    } else {
      return res.status(500).json({ message: `Failed to send ${printType}` })
    }
  } catch (error) {
    const err = { message: 'Failed to add webhook for postgrid', error: error?.response?.data?.error || error?.response?.data }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  }
}

const listenWebhookevents = async (req, res) => {
  try {
    const token = req.body
    let payload = {}
    jwt.verify(token, POSTGRID_SECRET_KEY, (err, decoded) => {
      if (err) {
        logger.error({ message: "Failed to authenticate token", error: err.message })
      } else {
        payload = decoded
      }
    })
    if (
      payload.type === "letter.created" ||
      payload.type === "postcard.updated"
    ) {
      const mailData = await fetchPrintMailByMailId(payload.data.id)
      mailData.mailData = payload.data
      mailData.save()
    }
    res.status(200).send("Received")
  } catch (error) {
    const err = { message: 'Failed to listen webhook for postgrid', error: error?.response?.data?.error || error?.response?.data }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  }
}

const fetchUserPrintMail = async (req, res) => {
  const userId = req.userId
  const { mailType, limit, page } = req.query
  try {
    const data = await fetchPrintMailByUserId(userId, mailType, limit, page)
    return res.status(200).json({ data })
  } catch (error) {
    const err = { message: 'Failed to fetch mail list', error: error }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  }
}

const fetchMailById = async (req, res) => {
  const id = req.params.id
  try {
    const data = await fetchPrintMailByMailId(id)
    return res.status(200).json({ data: data })
  } catch (error) {
    const err = { message: 'Failed to fetch letter/postcard details', error: error }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  }
}

module.exports = {
  sendNewPrintMail,
  cancelMail,
  createWebHook,
  fetchUserPrintMail,
  fetchMailById,
  postGridWebhook: listenWebhookevents,
}
