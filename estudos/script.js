

const array = ["item0", "item1", "item2", "item3"]
// um array simples que tem 4 itens, porém o último item se chama item3, já que arrays sempre começam na posição 0.

const objeto = {
    nome: "Nome do Objeto",
    // aqui colocamos uma característica do objeto, e citamos o nome desta característica. Isso equivale também para os outros campos do objeto, vejamos:

    cor: "Cor do Objeto",
    peso: 234 // exemplo de que características podem ser números inteiros ou decimais!
}

let arrayListaSelecionada = document.querySelector(".listaArray") // document.querySelector seleciona um item dentro do HTML, seja pelo seu nome, classe ou id

let contador = array.length -1
// Contador para o while usando .length no array, já que ele pega a quantidade de itens, então ele vai pegar 4, que é a quantidade de itens que temos no array.
// Porém, tiramos 1 do .length pois 4 é a quantidade de ITENS, mas não a POSIÇÃO deles, e já que não temos um item4, apenas vamos até o 3 em posições


// aqui vamos ver um típico loop usando while.

while (contador >= 0) { 
    arrayListaSelecionada.innerHTML += `<li>${array[contador]}</li>`
    
    // com .innerHTML estamos colocando dentro daquele item no HTML (no caso, arrayListaSelecionada é a mesma coisa que a <ul> com a classe "listaArray"), porém aqui estamos usando += ao invés de =, pois queremos adicionar coisas DENTRO da <ul>.

    // se usassemos apenas = ao invés de +=, ele iria apenas substituir o ul pelo o que está dentro da string interpolada.

    // `${variável}` é um metodo de adicionar variáveis dentro de um texto normal

    console.log(array[contador]) // não é necessário, mas é pra ver no console se as coisas estão aparecendo

    contador-- // tira 1 do contador.
}

// agora, como adicionamos coisas do objeto numa lista? Simples:

const objLista = document.querySelector(".listaObjeto")

objLista.innerHTML += `<li>O nome do objeto é: ${objeto.nome}</li>`
objLista.innerHTML += `<li>A cor do objeto é: ${objeto.cor}</li>`
objLista.innerHTML += `<li>O peso do objeto é de: ${objeto.peso}kg</li>`


// Fizemos o mesmo do que fizemos no while, porém note-se que adicionamos um ponto "." após "objeto", isso porque vamos chamar uma característica desse objeto, como se fosse uma subvariável dentro de uma váriavel. É estranho, mas lendo várias vezes fica até mais fácil.
