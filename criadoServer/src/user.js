const { randomUUID } = require("crypto");

class User {
  constructor() {
    this.users = [];
  }

  create(body) {
    const user = {
      ...body,
      id: randomUUID(),
    };

    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  update(body, id) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex <= -1) {
      throw new Error("Usuário não encontrado!")
    }
    // Alterar o usuário (ID permanece)
    this.users[userIndex] = {
      ...body,
      id,
    };
  }
}
module.exports = new User();
