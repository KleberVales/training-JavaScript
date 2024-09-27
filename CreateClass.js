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