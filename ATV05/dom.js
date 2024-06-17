 let calculadora = function(n1,n2,operacao){

     if (operacao == 'adicao' || operacao == 'adição'){

         return n1 + n2;

     } else if (operacao == 'subtracao' || operacao == 'subtração'){

         return n1 - n2;

     } else if (operacao == 'multiplicacao' || operacao == 'multiplicação'){

         return n1 * n2;

     }else if (operacao == 'divisao' || operacao == 'divisão'){
         if(n2 === 0){
             return 'Erro: Divisão por zero';
         }else{
             return n1/n2;
         }

     }else{

         return "Operação Inválida"

     }
 }
 let operacao = prompt('Qual a operalçao desejada');
 let n1 = Number(prompt('Digite a Primeira Variável:'));
 let n2 = Number(prompt('Digite a Segunda Variável:'));
 let resultado = calculadora(n1,n2,operacao);
 console.log(`A ${operacao} entre ${n1} e ${n2} é: ${resultado}`);

//--------------------------Outra Forma de Fazer--------------------------------------------------//

//  const calculadora = function(numero1, numero2, operacao) {
//      switch (operacao) {
//          case 'adição':
//          case 'adicao':
//          case '+':
//              return numero1 + numero2;
//          case 'subtração':
//          case 'subtracao':   
//          case '-':
//              return numero1 - numero2;
//          case 'multiplicação':
//          case 'multiplicacao':
//          case '*':
//              return numero1 * numero2;
//          case 'divisão':
//          case 'divisao':
//          case '/':
//              if (numero2 === 0) {
//                  return 'Erro: Divisão por zero';
//              }
//              return numero1 / numero2;
//          default:
//              return 'Operação inválida';
//      }
//  };

// // // Exemplos de uso:
// let operacao = prompt('Qual a operação desejada:');
// let numero1 = Number(prompt('Digite a Primeira Variável:'));
// let numero2 = Number(prompt('Digite a Segunda Variável:'));
// console.log(`A ${operacao} entre ${numero1} e ${numero2} é: ${calculadora(numero1,numero2,operacao)}`);