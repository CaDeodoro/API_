const sqliteConnection = require('../../index')
const creatUsers = require('./creatUsers')

async function migrationsRun() {
  const schemas = [creatUsers].join('')

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error))
}

module.exports = migrationsRun
