interface Usuario {
    nome: string
    username: string
    email: string
}

function atualizarUsuario(dadosDoUsuario: Partial<Usuario>) {
    console.log({dadosDoUsuario})
}

atualizarUsuario({
    nome: 'Dani',
    username: 'danileao'
})

