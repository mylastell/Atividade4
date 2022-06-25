//1 - crie uma função que exiba uma mensagem no console

function mensagem(msg){
    console.log(`Temos uma nova, ${mensagem}!`)
}

msg("mensagem")

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

 function nome(nome){
    console.log(`Bem-vindo(a), ${nome}!`)
 }

 nome("Mylena")
 nome("Leonardo")
 nome("Leila")


 
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) 
//e exiba no console

function about(nome, idade, estilo){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e amo escutar ${estilo}!`)
}

 about("Mylena", 22, "rap")
 about("Leonardo", 29, "rock")
 about("Leila", 50, "Mpb")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function musica(movie, music){
  console.log(`Meu filme favorito é ${movie} e minha música favorita é ${music}`)
}

musica("O auto da Compadecida", "Flashes-Ebony")
musica("Marley e eu", "Yellow Submarine")
musica("De repente 30", "Garota de Ipanema")

//*Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

 function conta(x){
     return x + 3
}

console.log(conta(5))
console.log(conta(9))