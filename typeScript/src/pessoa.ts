
type PessoaT = {
    nome: string,
    idade: number,
    email: string,
    usuario: string,
    password: string
}

type Funcionario = PessoaT & {
    salario: number
    comissao:number
    tipo: 'funcionario'
}

type Gerente = PessoaT & {
    PLR: number
    cartãoDeCredito: string
    tipo: 'gerente'
}

const novaPessoa: PessoaT = {
    nome: 'Lucas',
    idade: 32,
    email: 'diniz3003@gmail.com',
    usuario: 'lucas.diniz',
    password: '123456',
}

const novoFuncionario: Funcionario = {
    nome: 'Funcionario Micha',
    idade: 32,
    email: 'diniz3003@gmail.com',
    usuario: 'lucas.diniz',
    password: '123456',
    salario: 15000,
    comissao: 10,
    tipo: 'funcionario'

}

const novoGerente: Gerente = {
    nome: 'Gerente Dani',
    idade: 32,
    email: 'diniz3003@gmail.com',
    usuario: 'lucas.diniz',
    password: '123456',
    PLR: 1500,
    cartãoDeCredito: '12345648',
    tipo: 'gerente'
}

function cadastroDePessoa(pessoa: Funcionario | Gerente) {
    if (pessoa.tipo === 'funcionario') {
        console.log('Funcionario:' + JSON.stringify(pessoa))
    } else {
        console.log('Gerente:' + JSON.stringify(pessoa))
    }
    // console.log(
    //     pessoa
        // `Nome: ${pessoa.nome} - Idade: ${pessoa.idade} - Email: ${pessoa.email} - usuario: ${pessoa.usuario} -senha: ${pessoa
        // .password}`
    // )
}

// function cadastroDeFuncionario(funcionario: Funcionario) {
//     console.log(
//         `Nome: ${funcionario.nome} - Idade: ${funcionario.idade} - Email: ${funcionario.email} - usuario: ${funcionario.usuario} -senha: ${funcionario
//         .password} - salario: ${funcionario.salario} - comissao: ${funcionario.comissao}`
//     )
// }

// function cadastroDeGerente(gerente: Gerente) {
//     console.log(
//         `Nome: ${gerente.nome} - Idade: ${gerente.idade} - Email: ${gerente.email} - usuario: ${gerente.usuario} -senha: ${gerente
//         .password} - PLR: ${gerente.PLR} - cartão: ${gerente.cartãoDeCredito}`
//     )
// }

cadastroDePessoa(novoGerente);
cadastroDePessoa(novoFuncionario);

// cadastroDeFuncionario(novoFuncionario);
// cadastroDeGerente(novoGerente);