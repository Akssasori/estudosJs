const http = require("http");
const { randomUUID } = require("crypto");

let users = [];

const server = http.createServer((request, response) => {
  // Cadastro de usuário

  const METHOD = request.method;
  const URL = request.url;

  if (URL.startsWith("/users")) {
    if (METHOD === "POST") {
      request.on("data", (data) => {
        const body = JSON.parse(data);

        const user = {
          ...body,
          id: randomUUID(),
        };

        users.push(user);
        console.log(body);

        return response.end(JSON.stringify(users));
      });
    }

    if (METHOD === "GET") {
      return response.end(JSON.stringify(users));
    }

    if (METHOD === "PUT") {
      const paramSplit = URL.split("/");
      const id = paramSplit[2];

      request
        .on("data", (data) => {
          //Receber as informações que quero alterar do nosso body
          const body = JSON.parse(data);

          // Identificar qual usuario dentro do array
          const userIndex = users.findIndex((user) => user.id === id);

          if (userIndex <= -1) {
            return response.end(JSON.stringify({message: "Usuário não encontrado!"}))
          }

          // Alterar o usuário (ID permanece)
          users[userIndex] = {
            ...body,
            id,
          };
        })
        .on("end", () => {
          // Retornar usuário alterado
          return response.end(
            JSON.stringify({
              message: "Usuário alterado com sucesso!",
            })
          );
        });
    }
  }
});

server.listen(3000, () => console.log("Servidor está rodando"));

process.on("uncaughtException", (err) =>
  console.log(`Erro no servidor ${err}`)
);
