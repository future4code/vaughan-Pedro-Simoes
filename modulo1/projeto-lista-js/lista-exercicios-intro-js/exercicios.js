// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = 3
const largura = 5
const resultado = (altura * largura)
console.log(resultado)
return resultado
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual =Number.prompt ("Qual é o Ano Atual?")
const nacimento=Number.prompt ("Qual é o ano que voce naceu?")
const resultando = anoAtual - nacimento
console.log(resultado)
return resultado
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const Altura = Number.prompt("qual e a sua altura?")
const peso1 = Number.prompt("qual e seu peso?")
const resultado = (altura * altura) / peso
return resutando 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt ("Qual é o seu nome")
  const idade =Number.prompt ("qual e a sua idade")
  const egmail = prompt ("qual e o seu gmail")
console.log ("o meu nome e", nome, "tenho", idade, "meu egmail e", egmail)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor9 = prompt ("qual e sua cor favorita")
const cor8 = prompt ("qual e a sua segunda cor favorita")
const cor3 = prompt ("qual e a sua terceira cor favorita")
const corfavorita = [cor9, cor8, cor3]
console.log ("Suas cores favoritas sao", corfavorita)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const frase = prompt("escreva uma mensagem")
console.log(frase.toUpperCase)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const custo2 = Number.prompt("quanto custa o salao de festa?")
const valordovalorIngresso = Number.prompt("quanto custa o ingresso")
const resultado = custo2 /valordovalorIngresso
console.log(resultando)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const string3 = prompt("escreva uma mensagem")
const string6= prompt("escreva outra frase")
const resultado1 = string3.length
const resultado2 = string6.length
console.log (resultando1 <= resultando2)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const lista = prompt("escreva tres tipos de frutas")
console.log(lista[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const lista = prompt ("escreva outros tipos de frutas")
console.log(lista[2])

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let numeros =Number.prompt ("escreva 3 numeros")
numeros.push(numeros.slice(0,1)[0])
console.log(numeros)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const frase1 = prompt("escreva uma frase")
const frase2 = prompt("escreva outra frase")
const resultado1 = frase1.length
const resultado2 = frase2.length
console.log(frase1 => frase2)

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}