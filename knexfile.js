const knex = require("knex");

module.exports = {
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    database: "one_health_db",
    user: "postgres",
    password: "postgres",
  },
};