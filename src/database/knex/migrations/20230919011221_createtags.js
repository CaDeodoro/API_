exports.up = (knex) =>
  knex.schema.createTable("tags", (table) => {
    table.increments("id");
    table.text("name").notNullable();

    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    
    table.integer("user_id").references("id").inTable("users");
    // criando um campo tipo inteiro na tabela, chamado user_id e que ele faz referencia
    // ao ID que existe dentro da tabela users.
  
  });

exports.down = (knex) => knex.schema.dropTable("tags");
