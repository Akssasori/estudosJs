const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/minha-primeira-rota") {
    const result = { message: "Minha primeira rota!" };

    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    // response.statusMessage("Usuário salco com sucesso");
    //   response.writeHead(201, {
    //       "Content-Type": "application/json",
    //     })

    // response.write(JSON.stringify(result));
    return response.end(JSON.stringify(result));
  }

  if (request.url === "/minha-segunda-rota") {

    const result = { message: "Minha segunda rota!" };

    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    return response.end(JSON.stringify(result));

  }

  const result = { message: "Qualquer outra rota!" };

  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.write(JSON.stringify(result));
  response.end();
  
});

server.listen(3000, () => console.log("Servidor está rodando"));
