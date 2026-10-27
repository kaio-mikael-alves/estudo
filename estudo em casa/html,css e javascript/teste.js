// var p = 5, s = -1;
// if (p > s && s > 0){
//     console.log("a primeira é maior que a segunda e a segunda é um númnero positivo");
// }
// if(p>s && s<0){
//     console.log("a primeira é maior que a segunda e a segunda é um numero negativo");
// }
// if(p<s || s>0){
//     console.log("a primeira é menor que a segunda ou a segunda é um número positivo");
// }
// var c
// for(c=0;c<10;c++){
//     console.log(c);
// }
// var oi = 0
// while(oi < 10){
//     console.log(oi);
//     oi++;
// }
// do{
//     console.log(oi);
//     oi++;
// } while(oi<10)
//     var frutas = ['Laranja', 'Uva', 'Pera'];
// /*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for'*/
// for(var i = 0; i < frutas.length; i++){
//      console.log('Nome da Fruta contida no Array: ' + frutas[i]);
// }
// /*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for/in'*/
// for(var fruta in frutas){
//      console.log('Nome da Fruta contida no Array: ' + frutas[fruta]);
// }
// let somaTotal = 0;
// const qtdeInteracoes = 50;
// for(let i = qtdeInteracoes; i >= 1; i-- ) {
//      somaTotal += i; // equivalente a utilizar somaTotal = somaTotal + i
// }
// console.log('soma total:',somaTotal);
// var alunos = new Array();
// var alunos = new Array('Alex', 'Anna', 'João');
// var alunos = []; //array vazio
// var alunos = ['Alex', 'Anna', 'João']; // array de strings
// var notas = [10.0, 9.5, 9.5]; // array de números decimais
// var mistura = ['Um', 2, 3, 'Quatro']; //array de diversos tipos de dados
// var alunos = ['Alex', 'Anna', 'João'];
// alunos.splice(1,1,'Helena');
// Console.log(alunos); //imprimirá 'Alex, 'Helena', 'João'
// var alunos = ['Alex', 'Anna', 'João'];
// alunos.splice(3,0,'Helena');
// console.log(alunos); //imprimirá 'Alex', 'Anna', 'João', 'Helena'
//Declaração do array 'numeros' sem tamanho definido e sem elementos atribuídos
// var numeros = [ ];

// //O primeiro elemento (o de índice 0) recebe o retorno da função que solicita o primeiro número
// numeros[0] = soliticaPrimeiroNumero();

// //O segundo elemento (o de índice 1) recebe o retorno da função que solicita o segundo número
// numeros[1] = soliticaSegundoNumero();

// //Declaração de atribuição de valor à variável que armazenará o resultado da divisão
// //O resultado da divisão virá da função 'divida' (essa função recebe como parâmetro o array 'numeros')
// var resultadoDivisao = divida(numeros);

// //Exibindo o resultado da divisão na tela
// alert('O resultado da divisão é igual a: ' + resultadoDivisao);

// /*
// Função Javascript
// Esta função não recebe parâmetros
// */
// function soliticaPrimeiroNumero(){
//      //Declaração e atribuição de variável. Ela receberá o número inserido pelo usuário
// var numero1 = prompt("Insira o primeiro número: ");
     
//      //Condição para verificar se o número é positivo.
//      //Caso não, o retorno da função será chamar a própria função novamente.
//      // Esta operação será repetida até que um número válido seja inserido.
//      //Caso sim, retorna o valor inserido pelo usuário
//      if(numero1 < 0){
//           alert("O número precisa ser inteiro e positivo");
         
//           //Este tipo de retorno, onde a própria função é chamada novamente, é conhecido como recursividade
//           return soliticaPrimeiroNumero();
// }else{
//           return numero1;
//      }
// }

// function soliticaSegundoNumero(){
//      var numero2 = prompt("Insira o segundo número: ");

//      if(numero2 < 0){
//           alert("O número precisa ser inteiro e positivo");
//           return soliticaSegundoNumero();
//      }else{
//           return numero2;
//      }
// }

// /*
// Esta função recebe como parâmetro um array - que contém os 2 números que desejamos dividir
// */
// function divida(numeros){
//      var resultado = 0;
     
//      //Os números a serem divididos são acessados através dos índices do array
//      resultado = numeros[0] / numeros[1];
//      return resultado;
// }