const http = require("http");
const user = require("./user");
// cliente.query("SELECT NOW()", (err, res) => {
//   console.log("Sucess", res);
//   cliente.end();
// })

const server = http.createServer((request, response) => {
  // Cadastro de usuário

  const METHOD = request.method;
  const URL = request.url;

  if (URL.startsWith("/users")) {
    if (METHOD === "POST") {
      request.on("data", (data) => {
        const body = JSON.parse(data);
        const result = user.create(body);

        return response.end(JSON.stringify(result));
      });
    }

    if (METHOD === "GET") {
      const result = user.findAll();
      return response.end(JSON.stringify(result));
    }

    if (METHOD === "PUT") {
      const paramSplit = URL.split("/");
      const id = paramSplit[2];

      request
        .on("data", (data) => {
          //Receber as informações que quero alterar do nosso body
          const body = JSON.parse(data);
          try {
            user.update(body, id);
          } catch (err) {
            console.log(err)
            return response.end(
              JSON.stringify({
                message: err.message,
              })
            );
          }
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
