let lista_de_filmes = [];

export function menu() {
    console.log(
      '\nLista de Filmes: \n 1. Adicionar filme \n 2. Remover filme \n 3. Pesquisar filme \n 4. Ordenar lista \n 5. Exibir lista \n 6. Limpar lista \n 7. Sair \n Escolha uma opção:'
    );
}

export function adicionar_filme() {
    let filme_adicionar = prompt('Digite o nome do filme que deseja adicionar: ');
    if (filme_adicionar) {
      lista_de_filmes.push(filme_adicionar);
      console.log('Filme ' + filme_adicionar + ' adicionado à lista com sucesso!!!');
    } else {
      console.log('Nome do filme inválido!!!');
    }
}

export function remover_filme() {
    let filme_remover = prompt('Digite o nome do filme que deseja remover: ');
    if (filme_remover) {
      let index = lista_de_filmes.indexOf(filme_remover);
      if (index !== -1) {
        lista_de_filmes.splice(index, 1);
        console.log('Filme ' + filme_remover + ' removido da lista com sucesso!!!');
      } else {
        console.log('O filme não existe na lista!!!');
      }
    } else {
      console.log('Nome do filme inválido!!!');
    }
}

export function pesquisar_filme() {
    let filme_pesquisar = prompt('Digite o nome do filme que deseja pesquisar: ');
    if (filme_pesquisar) {
      let encontrar = lista_de_filmes.includes(filme_pesquisar);
      let mensagem = encontrar ? 'sim' : 'não';
      console.log('O filme ' + filme_pesquisar + ' foi encontrado? \n' + mensagem);
    } else {
      console.log('Nome do filme inválido!!!');
    }
}

export function ordenar_lista() {
    let ordenar = lista_de_filmes.sort();
    console.log('A lista foi ordenada! \nAqui está: ' + ordenar);
}

export function exibir_lista() {
    if (lista_de_filmes.length === 0) {
      console.log('A lista de filmes está vazia!!!');
    } else {
      lista_de_filmes.forEach((filme) => console.log('- ' + filme));
    }
}

export function limpar_lista() {
    lista_de_filmes.length = 0;
    console.log('A lista de filmes foi limpada com sucesso!!!');
}
