//O que é um array
//INDEX

const nomes = ["Maria", "joão", "José", "Felipe", "Isabel"];

//adicionando um item no final do array
//nomes.push("Lucas");

//remover um item, passo a possição no index do item no qual ele vai começar a remoção e depois quantos valores são para ser removidos
//removendo só o João
//nomes.splice(1,1)

// fatiar, aqui ele vai retirar a primeira posição e depois os dois primeiros de traz para frente
//precisa guarda o valor em outro array
const newArray = nomes.slice(1, -2);

console.log(newArray);