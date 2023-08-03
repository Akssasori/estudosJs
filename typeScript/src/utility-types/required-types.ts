interface Video {
    nome: string
    duracao?: number // este atributo fica opicional 
    categoria: string
    descricao: string
}

// const novoVideo: Video = {
//     categoria: 'comedia',
//     // descricao: 'Alguma coisa',
//     nome: 'Filme de comedia',
//     duracao: 100
// }

function cadastrarVideo(video:Required<Video>) { //Required vai fazer que todos os atributos sejem necessário ate os opcionais
    console.log({video})
    
}

cadastrarVideo({
    categoria: 'comedia',
    descricao: 'Alguma coisa',
    nome: 'Filme de comedia',
    duracao: 100
})