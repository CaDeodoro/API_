const config = require("../../../knexfile");
const knex = require("knex");

const connection = knex(config.development);

module.exports = connection;
// exportar a conexção para ser utilizada
// em outros lugares