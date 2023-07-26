const router = require("./routes");

const handler = (request, response) => {

    const method = request.method;
    const url = request.url;

    const urlSplit = url.split("/").filter(Boolean);

    // Busque as rotas que comecem por urlSplit[0] /users
    // E
    // Busque as rotas que sejam do metodo method
    const resultRouter = router.filter(item => {
        return (
            item.method.toLocaleLowerCase() === method.toLocaleLowerCase() &&
            item.url.toLocaleLowerCase().startsWith(`/${urlSplit[0].toLocaleLowerCase()}`)
        );
    });

    const executeRouter =  resultRouter.find((item) => {
        const routeUrlSplit = item.url.split("/").filter(Boolean);
        return urlSplit.length === routeUrlSplit.length;
    });

    if (!executeRouter) {
        response.statusCode = 404;

        return response.end("Not Found");  
    }

    const routerSplitUrl = executeRouter.url.split("/").filter(Boolean);

    const objParams = {
    }

    routerSplitUrl.forEach((item, index) => {
        console.log(`Item - ${item} -Index ${index}`);
        if(item.startsWith(":")) {
            const formatField = item.replace(":", "");
            objParams[formatField] = urlSplit[index];
        }
    });

    request
    .on("data", (data) => {
        const body = JSON.parse(data);
        request.body = body;})
    .on("end", () => {
        request.params = objParams;
        return executeRouter.controller(request, response)
    })

    
};

module.exports = handler;