import { 
    menu, 
    adicionar_filme, 
    remover_filme, 
    pesquisar_filme, 
    ordenar_lista, 
    exibir_lista, 
    limpar_lista 
  } from './functions.js';
  
  while (true) {
      menu();
      let opcao = parseInt(prompt('Digite a opção: '));
      switch (opcao) {
        case 1:
          adicionar_filme();
          break;
        case 2:
          remover_filme();
          break;
        case 3:
          pesquisar_filme();
          break;
        case 4:
          ordenar_lista();
          break;
        case 5:
          exibir_lista();
          break;
        case 6:
          limpar_lista();
          break;
        case 7:
          console.log('Saindo...');
          break;
        default:
          console.log('Opção inválida!!!');
      }
    
      if (opcao === 7) {
        console.log('Você saiu do programa! \nObrigado por usar a lista de filmes!!!');
        break;
      }
  }
  