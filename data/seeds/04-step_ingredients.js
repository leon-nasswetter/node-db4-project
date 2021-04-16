exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('step_ingredients').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('step_ingredients').insert([
          {step_id: 1, ingredient_id: 1, quantity: 213},
          {step_id: 1, ingredient_id: 2, quantity: 10},
          {step_id: 1, ingredient_id: 3, quantity: 11},
          {step_id: 4, ingredient_id: 4, quantity: 2},
          {step_id: 4, ingredient_id: 5, quantity: 223},
          {step_id: 4, ingredient_id: 6, quantity: 0.02},
          {step_id: 8, ingredient_id: 7, quantity: 23},
          {step_id: 8, ingredient_id: 8, quantity: 12.12},
          {step_id: 8, ingredient_id: 9, quantity: 23.2},
          {step_id: 8, ingredient_id: 10, quantity: 73},
          {step_id: 8, ingredient_id: 11, quantity: 13},
          {step_id: 8, ingredient_id: 12, quantity: 43},
        ]);
      });
  };