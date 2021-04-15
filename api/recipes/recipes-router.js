const router = require("express").Router()
const Recipe = require("./recipes-model")


router.get("/:recipe_id", (req, res, next) => {
    Recipe.getById(req.params.recipe_id)
        .then(recipe => {
            // throw new Error("sad") sad path test
            res.status(200).json(recipe)
        })
        .catch(next)
})

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
    res.status(500).json({
        someMessage: "ohoh.. recipe router..",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router