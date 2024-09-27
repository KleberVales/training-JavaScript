// console.log('Imprimir algo');

// let varr = 11;

// const varr2 = 12;

//const prompt = require("prompt-sync")();

//let eta = prompt("preço do etanol: ");
//let gaso = prompt("preço do gasolina: ");
//let tipo = prompt("tipo de combustivel do carro: ")
//let kmPorLitro = prompt("km por litro: ");
//let distancia = prompt("distância percorrida: ");

//if(tipo == "etanol"){
//    console.log(distancia/kmPorLitro * eta);
//} else{
//    console.log(distancia/kmPorLitro * gaso);
//}

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');

    }
}

const vitor = new Pessoa();

vitor.nome = 'kleber'

console.log(vitor);








