const http = require("http");
const { randomUUID } = require("crypto");

let users = [];

const server = http.createServer((request, response) => {

  // Cadastro de usuário

  const METHOD = request.method;

  if (METHOD === "POST") {

    request.on("data", (data) => {

      const body = JSON.parse(data);
      
      const user = {
        ...body,
        id: randomUUID(),
      }
      
      users.push(user);
      console.log(body);
      
      return response.end(JSON.stringify(users));
    });
  }
});

server.listen(3000, () => console.log("Servidor está rodando"));
