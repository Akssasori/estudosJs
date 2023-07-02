const { Client } = require("pg");

const cliente = new Client({
  user: "postgres",
  host: "localhost",
  database: "modulo_api_cursos",
  password: "coti",
  port: 5432,
});

cliente.connect();

module.exports = {
  client,
};
