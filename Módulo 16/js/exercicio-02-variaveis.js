// variaveis

let branco = 'preto';
let preto = 'cinza';
let cinza = 'branco';
let carro = 'preto';
let valor = 30000; 
let prestacao = 750;
let entrada = 3000;


// exercícios sobre as variaveis de cores

//a) 
console.log( branco == 'branco'); 

//b)
console.log( branco == cinza); 

//c)
console.log( carro === branco); 

//d) outra forma de definir a variavel cavalo utilizando if e else

if (carro == "preto") {
 cavalo = "cinza"
  } else {
  cavalo = "marrom"}

  console.log( 'A cor para a variavel cavalo é: ' + cavalo); 

// soma de caracteres

let somaCores = branco + preto + cinza;

let caracteres = somaCores.length;

console.log("A soma das variáveos de cores é igual: " + caracteres);


// Prestações necessárias para pagar o valor do carro

let numeroPrestacoes = (valor - entrada) / prestacao ;

console.log("São necessárias " + numeroPrestacoes + " prestações para quitar o carro")