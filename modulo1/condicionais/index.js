
const nome = promot("qual e o seu nome?")
const idade = Number.prompt("qual e a sua idade")


if (idade) {(idade <= 18 )
    console.log('voce pode dirigir')
} else { (menordeidade > 17) 
    console.log(`${menordeidade}, com esta idade voce nao pode dirigir`)
}
//ex 2 e 3 sao juntos 
const horario = prompt("qual e o horario que voce estuda, para M (matutino) ou V (Vespertino) ou N (Noturno).").toLocaleLowerCase
function horario (){
    switch(horario) {
       case 'm':
          console.log('bom dia!')
          break
       case 'v':
          console.log('boa tarde!')
          break
       case 'n':
          console.log('boa noite!')
          break         
       default:
          console.log('este resultado não encontrado')
        break
        }
 }
verificacao(m, v, n)

 // ex 4
 const genero = fantasia 
 const preco = 15
 const filme = prompt ("qual é filme e o genero do filme que voce quer assistir?")
 const precoMaior = Number.prompt ("qual e o valor do filme?")

 function verificacao (genero, preco, filme, precoMaior) {
    if (genero && filme, precoMaior === preco ) {
        console.log("Bom filme!")
    } else 
    { genero && filme, precoMaior !== preco
        console.log("Escolha outro filme :(")
    }
}
 verificacao (genero, preco, filme, precoMaior)