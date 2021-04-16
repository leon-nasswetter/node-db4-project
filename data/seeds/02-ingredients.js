exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('ingredients').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('ingredients').insert([
          {ingredient_name: 'Raw Fish', ingredient_unit: "lbs"},
          {ingredient_name: 'Rice', ingredient_unit: "grams"},
          {ingredient_name: 'Seaweed', ingredient_unit:"grams"},
          {ingredient_name: 'Meat', ingredient_unit: "lbs"},
          {ingredient_name: 'Broth', ingredient_unit: "ounces"},
          {ingredient_name: 'Eggs', ingredient_unit: "units"},
          {ingredient_name: 'Butter', ingredient_unit: "grams"},
          {ingredient_name: 'Avocado', ingredient_unit: "grams"},
          {ingredient_name: 'Sugar', ingredient_unit: "lbs"},
          {ingredient_name: 'Random Something', ingredient_unit: "lbs"},
          {ingredient_name: 'More Random', ingredient_unit: "lbs"},
          {ingredient_name: 'Another Ingredient', ingredient_unit: "lbs"}
        ]);
      });
  };