const { newCustomFormShippo } = require("../../services/goShippoServices")

const { newEasypostCustom } = require("../../services/easypostServices")
const {
  GOSHIPPO_SERVICE,
  EASYPOST_SERVICE,
} = require("../../constant/constants")
const {
  createNewCustomForm,
  findUserCustoms,
  deleteCustomDetail,
  findCustomDetailsById,
} = require("../../helper/custom")
const { sendNotification } = require("../../helper/sendNotification")
const { logger } = require("../../utils/logger")

const createNewCustom = async (req, res) => {
  const payload = req.body
  const service = req.params.service
  const userId = req.userId
  try {
    let response
    switch (service) {
      case GOSHIPPO_SERVICE:
        response = await newCustomFormShippo(payload)
        break
      case EASYPOST_SERVICE:
        response = await newEasypostCustom(payload)
        break
      default:
        return res.status(500).json({ message: "Something went wrong." })
    }
    if (response.data) {
      let customsData = {
        userId: userId,
        service: service,
        customId: response.data.id || response.data.object_id,
        customData: response.data,
      }
      const customs = await createNewCustomForm(customsData)
      if (customs) {
        await sendNotification({
          user: req.userDetails,
          message: "Your custom created successfully",
          emailMessage: `<p>Your custom created successfully.</p>`,
          emailSubject: "Your custom status",
        })
        return res.status(200).json({ data: customs })
      }
    } else {
      return res.status(500).json({ message: "Failed to create customs" })
    }
  } catch (error) {
    const err = { message: 'Failed to create custom form', error: error?.response?.data?.error || error?.response?.data }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  }
}

const fetchUserCustoms = async (req, res) => {
  const userId = req.userId
  const service = req.query.service
  const { page, limit } = req.query

  try {
    const customsData = await findUserCustoms(userId, service, page, limit)
    return res.status(200).json({ customsData })
  } catch (error) {
    const err = { message: 'Failed to fetch custom form list', error: error }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  }
}

const deleteCustomData = async (req, res) => {
  const userId = req.userId
  const customId = req.params.customId
  try {
    const customsData = await deleteCustomDetail(userId, customId)
    if (!customsData) {
      return res
        .status(400)
        .json({ message: "Custom form not found. Please check again." })
    }
    return res.status(200).json({ message: "Custom data deleted succesfully." })
  } catch (error) {
    const err = { message: 'Failed to delete a custom form', error: error }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  }
}

const editCustomData = async (req, res) => {
  const userId = req.userId
  const customId = req.params.customId
  const payload = req.body
  try {
    const customData = await findCustomDetailsById(userId, customId)
    if (!customData) {
      return res
        .status(400)
        .json({ message: "Custom form not found. Please check again." })
    }
    let response
    switch (customData.service) {
      case GOSHIPPO_SERVICE:
        response = await newCustomFormShippo(payload)
        break
      case EASYPOST_SERVICE:
        response = await newEasypostCustom(payload)
        break
      default:
        return res.status(500).json({ message: "Something went wrong." })
    }
    if (response.data) {
      customData.customData = response.data
      customData.customId = response.data.id || response.data.object_id
      await customData.save()
      return res
        .status(200)
        .json({ message: "Custom data updated succesfully.", data: customData })
    } else {
      return res.status(500).json({ message: "Failed to update customs" })
    }
  } catch (error) {
    const err = { message: 'Failed to update a custom form', error: error }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  }
}

module.exports = {
  createNewCustom,
  fetchUserCustoms,
  deleteCustomData,
  editCustomData,
}
