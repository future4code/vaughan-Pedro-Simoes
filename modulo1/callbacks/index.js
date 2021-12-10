//ex 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 const nomeDosPets = pets.map((pets, indice, array) => {
     return pets.nome 
 })
 const somenteSalsicha = pets.filter((pets, indice, array) => {
     return pets.raca === "Salsicha"
 })
 const descontoPooldle = pets.filter((pets, indice, array) => {
     if  (pets.raca === "Pooldle")
      {
         console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", nome, "!!")
     return 
     }
 
 
 })
 
 const produtos = [
     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
  ]
 
  const nomeDosProdutos = produtos.map((produtos, indice, array) => {
     return produtos.nome 
 })
 //ex 2 b) 
 
 // c)
 const somenteBebidas = produtos.filter((produtos, indice, array) => {
     return produtos.categoria === "Bebidas"
 })
 
 const nomeDoYpe = produtos.map((produtos, indice, array) => {
     return produtos.nome === "Ypê"
 })
 const comprarYpe = produtos.filter((produtos, indice, array) => {
     if (produtos.nome === "Ypê") {
     console.log(produtos.nome === "Ypê" `Compre ${nome} por ${preco}`)
     }
     return produtos.nom = preco
 })