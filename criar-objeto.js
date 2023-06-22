var caneta = new  Object();
caneta.cor = "Azul"
caneta.marca = "Bic"
caneta.dimensao = "6cm"

console.log(caneta);

/*

Criar utilizando função
*/

function Caneta(cor,marca,dimensao) {
    this.cor = cor;
    this.marca = marca;
    this.dimensao = dimensao;
}

var novaCaneta = new Caneta();
novaCaneta.cor = "Preta";
novaCaneta.dimensao = "5cm"
novaCaneta.marca = "Bic"
console.log(novaCaneta);



