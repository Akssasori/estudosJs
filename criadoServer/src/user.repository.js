const { client } = require("./database");
const { randomUUID } = require("crypto");

class UserRepository {
  constructor() {
    this.client = client;
  }

  async create({ name, username, email }) {
    const id = randomUUID();
    await this.client.query(
      "INSERT INTO USERS(ID, NAME, USERNAME, EMAIL) VALUES ($1, $2, $3, $4)",
      [id, name, username, email]
    );
    const user = Object.assign({
      name,
      username,
      email,
      id,
    });

    return user;
  }

  async findAll() {
    let result = [];
    const { rows } = await this.client.query("SELECT * FROM USERS");
    result = rows;
    return result;
  }
}

module.exports = UserRepository;
