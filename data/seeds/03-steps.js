exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('steps').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('steps').insert([
          {step_number: 1, step_instructions: "Get ingredients ready", recipe_id: 1},
          {step_number: 2, step_instructions: "Do some magic cutting", recipe_id: 1},
          {step_number: 3, step_instructions: "Throw it into the Bento Box", recipe_id: 1},
          {step_number: 1, step_instructions: "Get the goodies", recipe_id: 2},
          {step_number: 2, step_instructions: "Throw em into some pots", recipe_id: 2},
          {step_number: 3, step_instructions: "Wait some time", recipe_id: 2},
          {step_number: 4, step_instructions: "Get it outta there and serve it", recipe_id: 2},
          {step_number: 1, step_instructions: "Good first step is to not panic", recipe_id: 3},
          {step_number: 2, step_instructions: "Second step is to eventually panic", recipe_id: 3},
          {step_number: 3, step_instructions: "Just breathe", recipe_id: 3},
          {step_number: 4, step_instructions: "Relax m8", recipe_id: 3},
          {step_number: 5, step_instructions: "AAaaaaand its over", recipe_id: 3}
        ]);
      });
  };