exports.seed = function (knex) {
  return knex('user_roles').insert([
    { userId: 1, roleId: 1 },
    { userId: 2, roleId: 2 },
    { userId: 3, roleId: 3 },
  ]);
};
