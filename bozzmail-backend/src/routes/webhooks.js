const express = require("express")
const router = express.Router()
const {
  postGridWebhook,
} = require("../controllers/printMail/printMailController")
const { purchaseShipment } = require("../controllers/shipments/shipmentController")
const { addFundWalletsHook } = require("../controllers/user/paymentController")

router.post(
  "/print-mail",
  express.raw({ type: "application/json" }),
  postGridWebhook
)

router.get(
  "/dynopay-purchase",
  purchaseShipment
)

router.get(
  "/:userId/dynopay-addFund",
  addFundWalletsHook
)

module.exports = router
