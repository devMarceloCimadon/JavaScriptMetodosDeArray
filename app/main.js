let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI(){

    const res = await fetch(endpointDaAPI) 
    //Faz a requisição da API
    livros = await res.json() 
    //Converte os dados da requisição para ficar mais simples de manipular
    let livrosDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosDesconto)

}
