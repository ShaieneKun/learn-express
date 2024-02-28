// Libs
const express = require("express")
const app = express()

app.use(express.static("public"))

// Settings

// app.set("view engine", "ejs")

// URLs

// app.get("/", (req, res) => {
//     res.render("index", { text: "world" })
// })

// app.get("/json", (req, res) => {
//     res.json({ hello: "world" })
// })

// const userRouter = require("./routes/users")

// app.use(logger)

// app.use("/users", logger, userRouter)

// Middleware

// function logger(req, res, next) {
//     console.log(req.originalUrl)
//     next()
// }

// server start
app.listen(3000)