function aguardarSetTimeOut() {
  //Sempre passo dois parametros(resolve, reject)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Segunda mensagem");
      resolve("Segunda mensagem");
    }, 1000);
  });
}

async function executar() {

  try {

    console.log("Primeira mensagem");

    const segundaMensagem = await aguardarSetTimeOut();
    console.log(segundaMensagem);
  
    console.log("Terceira mensagem");
    
  } catch (error) {
    console.log(error)
  }

}

executar();

//Then() vai esperar dentro de um escopo especifico o escope dele, se for no escopo de função ai usar async await

console.log("Primeira mensagem");

aguardarSetTimeOut().then(result => {
  console.log("Inicio");
  console.log(result);
  console.log("Fim");
})
// console.log(segundaMensagem);

console.log("Terceira mensagem");