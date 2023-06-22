// Spread - Espalhar...

const aluno = {
    nome: "Fernando",
    idade: 19,
    cursos: ["Node", "SQL", "Docker"],
    email: "fernando@gmail.com",
    endereco: "Rua Qualquer uma",
    telefone: "123123123"
};

console.log({aluno});

const alunoAtualizado = {
    // nome: aluno.nome,
    // cursos: aluno.cursos,
    // idade: 20,
    // email: aluno.email,
    // endereco: aluno.endereco,
    // telefone: aluno.telefone
    ...aluno,
    idade: 20,
    cursos: [...aluno.cursos, "Java"]
};

console.log({alunoAtualizado});

// Rest ... também se usa o três pontos

//Rest ...

const { nome, idade, ...resto} = aluno;

const nomes = ["Daniel", "Mariana", "Carol"];
const [primeiro, ...restoNomes] = nomes;
console.log(restoNomes)