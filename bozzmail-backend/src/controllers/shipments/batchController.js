const { newBatchShippo } = require("../../services/goShippoServices")
const { newBatchEasypost } = require("../../services/easypostServices")
const {
  GOSHIPPO_SERVICE,
  EASYPOST_SERVICE,
} = require("../../constant/constants")
const { saveNewBatch, fetchBatchData } = require("../../helper/batchShipment")
const { logger } = require("../../utils/logger")
const { sendNotification } = require("../../helper/sendNotification")

const createNewBatch = async (req, res) => {
  const payload = req.body
  const service = req.params.service
  const userId = req.userId
  try {
    let response
    switch (service) {
      case GOSHIPPO_SERVICE:
        response = await newBatchShippo(payload)
        break
      case EASYPOST_SERVICE:
        response = await newBatchEasypost(payload)
        break
      default:
        return res.status(500).json({ message: "Something went wrong." })
    }
    if (response.data) {
      let batchData = {
        userId: userId,
        service: service,
        batchId: response.data.id || response.data.object_id,
        batchData: response.data,
      }
      const batch = await saveNewBatch(batchData)
      if (batch) {
        await sendNotification({
          user: req.userDetails,
          message: "Batch Created Successfully",
          emailMessage: `<p>Batch Created Successfully.</p>`,
          emailSubject: "Batch creation",
        })
        return res.status(200).json({ data: batch })
      }
    } else {
      return res.status(500).json({ message: "Failed to create batch" })
    }
  } catch (error) {
    const err = { message: 'Failed to create a batch shipment', error: error?.response?.data?.error || error?.response?.data }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  }
}

const getUserBatches = async (req, res) => {
  const userId = req.userId
  const { page, limit } = req.query

  try {
    const result = await fetchBatchData(userId, page, limit)

    return res.status(200).json({
      result,
    })
  } catch (error) {
    const err = { message: 'Failed to fetch batch list', error: error }
    logger.error(err)
    return res.status(error.status || 500).json(err)
  }
}

module.exports = {
  createNewBatch,
  getUserBatches,
}
