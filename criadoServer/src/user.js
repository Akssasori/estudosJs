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
    // let result = [];
    // result = await this.userRepository.findAll();
    // return result;
    return this.userRepository.findAll();
  }

  async update(body, id) {
    // const userIndex = this.users.findIndex((user) => user.id === id);
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error("Usuário não encontrado!")
    }

    // if (userIndex <= -1) {
    //   throw new Error("Usuário não encontrado!");
    // }
    // // Alterar o usuário (ID permanece)
    // this.users[userIndex] = {
    //   ...body,
    //   id,
    // };
    await this.userRepository.update(body, id);
  }
}
module.exports = new User();
