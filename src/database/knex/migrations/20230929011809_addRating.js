exports.up = (knex) =>
  knex.schema.alterTable("notes", (table) => {
    table.integer("rating");
  });

exports.down = (knex) => knex.schema.dropTable("notes");
