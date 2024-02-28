const express = require("express")

router = express.Router()

router.get("/", (req, res) => {
    res.send("user-list")
})

router.get("/new", (req, res) => {
    res.send("user-new-form")
})

router.post("/", (req, res) => {
    res.status(401)
})

router.route("/:id")
    .get((req, res) => {
        res.send(`GET user with id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`PUT user with id ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`DELETE user with id ${req.params.id}`)
    })

const users = [{ name: "Rafael" }, { name: "Yasmin" }]
router.param("id", (req, res, next, id) => {
    req.user = users[id] || null
    next()
})
module.exports = router