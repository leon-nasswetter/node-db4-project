function getById(recipe_id) {
    return Promise.resolve(`test with id of ${recipe_id}`)
}

module.exports = { getById }