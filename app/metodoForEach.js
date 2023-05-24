const elementoInserirLivros = document.getElementById('livros')
const elementoValorTotLivrosDisp = document.getElementById('valor_total_livros_disponiveis')

function exibirLivrosNaTela(listaDeLivros){

  elementoValorTotLivrosDisp.innerHTML = ''

  elementoInserirLivros.innerHTML = ''
  //Limpa a tela e mostra somente os livros filtrados

    listaDeLivros.forEach(livro => {

      let disponibilidade = livro.quantidade > 0 ? 'livro__imagem' : 'livro__imagem indisponivel'
      /*Basicamente fazendo um if de uma linha, passo a condição(livro > 0), 
      e caso seja verdadeiro, ele retornará o que está antes dos dois pontos, 
      caso seja falso, o que está após os dois pontos*/

      elementoInserirLivros.innerHTML += 
        
        `<div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
        </div>`

    });

}
