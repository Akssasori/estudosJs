// WHILE  -  enquanto a condição for verdadeira, faça algo

salario = 1000;

// while (salario > 0) {
//   console.log((salario -= 100));
// }

do {  // no doWhile ele entra pelomenos uma vez
  console.log("Meu salário é de: ", (salario -= 100));
} while (salario > 0);
