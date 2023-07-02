const { randomUUID } = require("crypto");
const UserRepository = require("./user.repository");

class User {
  constructor() {
    this.users = [];
    this.userRepository = new UserRepository();
  }

  create(body) {
    const user = this.userRepository.create(body);
    return user;
  }

  async findAll() {
    let result = [];
    result = await this.userRepository.findAll();
    return result;
  }

  update(body, id) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex <= -1) {
      throw new Error("Usuário não encontrado!");
    }
    // Alterar o usuário (ID permanece)
    this.users[userIndex] = {
      ...body,
      id,
    };
  }
}
module.exports = new User();
