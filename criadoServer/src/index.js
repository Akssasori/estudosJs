const http = require("http");
const user = require("./user");
// cliente.query("SELECT NOW()", (err, res) => {
//   console.log("Sucess", res);
//   cliente.end();
// })

const server = http.createServer(async (request, response) => {
  // Cadastro de usuário

  const METHOD = request.method;
  const URL = request.url;

  if (URL.startsWith("/users")) {
    if (METHOD === "POST") {
      request.on("data", async (data) => {
        const body = JSON.parse(data);
        const result = await user.create(body);

        return response.end(JSON.stringify(result));
      });
    }

    if (METHOD === "GET") {
      // let result = user.findAll();
      // result.then(result => {
      //   console.log(result)
      //   return response.end(JSON.stringify(result));
      // });
      const result = await user.findAll();
      return response.end(JSON.stringify(result));
    }

    if (METHOD === "PUT") {
      const paramSplit = URL.split("/");
      const id = paramSplit[2];

      request.on("data", async (data) => {
        //Receber as informações que quero alterar do nosso body
        const body = JSON.parse(data);
        try {
          await user.update(body, id);
          return response.end(
            JSON.stringify({
              message: "Usuário alterado com sucesso!",
            })
          );
        } catch (err) {
          console.log(err);
          return response.end(
            JSON.stringify({
              message: err.message,
            })
          );
        }
      });
    }
  }
});

server.listen(3000, () => console.log("Servidor está rodando"));

process.on("uncaughtException", (err) =>
  console.log(`Erro no servidor ${err}`)
);
