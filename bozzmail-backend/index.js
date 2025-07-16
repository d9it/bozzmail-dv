const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path")
const session = require("express-session")
const connectDB = require("./src/config/database")
const authRoutes = require("./src/routes/auth")
const userRoutes = require("./src/routes/user")
const shipmentsRoutes = require("./src/routes/shipments")
const batchShipmentsRoutes = require("./src/routes/batchShipment")
const customsRoutes = require("./src/routes/customs")
const hsCodeRoutes = require("./src/routes/hscode")
const pickupRoutes = require("./src/routes/pickup")
const printMailRoutes = require("./src/routes/printMail")
const webhookRoutes = require("./src/routes/webhooks")
const addressRoutes = require("./src/routes/address")
const adminRoutes = require("./src/routes/admin")

const jwtMiddlewareValidation = require("./src/middleware/validateToken")
const {
  PASSPORT_SESSION_SECRET,
  PORT,
  CORS_ORIGIN,
} = require("./src/constant/constants")

const app = express()

const startServer = async () => {
  try {
    await connectDB()
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(
      bodyParser.json({
        verify: (req, res, buf) => {
          req.rawBody = buf
        },
      })
    )
    app.use(express.text({ type: 'text/plain' }))
    app.use(express.static(path.join(__dirname, "public")))
    app.use(
      cors({
        origin: CORS_ORIGIN,
        methods: "GET,POST,PUT,DELETE",
        allowedHeaders: "Content-Type,Authorization",
        credentials: true,
      })
    )
    app.use(
      session({
        secret: PASSPORT_SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
      })
    )

    //routes
    app.use("/auth", authRoutes)
    app.use("/user", jwtMiddlewareValidation, userRoutes)
    app.use("/shipments", jwtMiddlewareValidation, shipmentsRoutes)
    app.use("/batch", jwtMiddlewareValidation, batchShipmentsRoutes)
    app.use("/customs", jwtMiddlewareValidation, customsRoutes)
    app.use("/hscode", jwtMiddlewareValidation, hsCodeRoutes)
    app.use("/pickup", jwtMiddlewareValidation, pickupRoutes)
    app.use("/print-mail", jwtMiddlewareValidation, printMailRoutes)
    app.use("/address", jwtMiddlewareValidation, addressRoutes)
    app.use("/admin", jwtMiddlewareValidation, adminRoutes)
    app.use("/webhooks", webhookRoutes)
    const port = PORT || "3001"
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  } catch (error) {
    console.error("Failed to connect to the database:", error)
    process.exit(1)
  }
}

startServer()
