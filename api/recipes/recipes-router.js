const router = require("express").Router()

router.use("*", (req, res) => {
    res.json("working")
})


router.use((err, req, res, next) => {
    res.status(500).json({
        someMessage: "ohoh recipe router",
        message: err.message
    })
})

module.exports = router