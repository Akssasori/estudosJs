const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "modulo_api_cursos",
  password: "coti",
  port: 5432,
});

client.connect();

module.exports = {
  client,
};
