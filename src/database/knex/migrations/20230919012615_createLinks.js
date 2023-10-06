exports.up = (knex) => knex.schema.createTable("links", (table) => {
    table.increments("id");
    table.text("url").notNullable();

    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());
    
    // criando um campo tipo inteiro na tabela, chamado user_id e que ele faz referencia
    // ao ID que existe dentro da tabela users.
  });

exports.down = (knex) => knex.schema.dropTable("links");
