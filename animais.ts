export class Animais {
    nome: string;
    idade: number;
    som: string;

    constructor(nome: string, idade: number, som: string){
        this.nome = nome
        this.idade = idade
        this.som = som
    }
    mostraInformacoes(){
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nSom: ${this.som}`)
    }
}
