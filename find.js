const usuarios = [
    {id:1, nome:"Maria", idade: 18},
    {id:2, nome:"José", idade: 19},
    {id:3, nome:"João", idade: 18},
    {id:4, nome:"Pedro", idade: 19},
    {id:5, nome:"Joana", idade: 20},
];

//console.log({usuarios});

// FIND
const result = usuarios.find((usuario) => {
   return usuario.idade == 19;
})

console.log(result)