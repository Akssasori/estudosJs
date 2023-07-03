const http = require("http");
const { UserController } = require("./controllers/user.controller");

const userController = new UserController()

const server = http.createServer(async (request, response) => {

  const METHOD = request.method;
  const URL = request.url;

  if (URL.startsWith("/users")) {

    if (METHOD === "POST") {
      return userController.post(request, response);
    }
    if (METHOD === "GET") {
      return userController.get(request, response);
    }
    if (METHOD === "PUT") {
      return userController.put(request, response);
    }

  }
});

server.listen(3000, () => console.log("Servidor está rodando"));

process.on("uncaughtException", (err) =>
  console.log(`Erro no servidor ${err}`)
);
