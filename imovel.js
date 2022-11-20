/*
Parte 1

Crie as seguintes classes: Imóvel e Pessoa;

Um Imóvel deve ter os seguintes atributos: endereço, cep, area em metros, quantidade de
banheiros, quantidade de quartos, as pessoas que moram neste imóvel e o valor do
mesmo;

Uma pessoa deve ter os seguintes atributos: nome, cpf e uma data de nascimento;

Criar três classes filhas que herdam de Imóvel: Casa, Apartamento e Kitnet;

Uma Casa deve ter um atributo “ComQuintal” que recebe um valor booleano;

Um Apartamento deve ter os atributos: andar e o valor do condomínio;

Um Imóvel deve ter dois comportamentos: adicionar uma pessoa como morador e remover
uma pessoa como morador;

Uma Kitnet pode ter até dois banheiros, um apartamento pode ter três banheiros e uma
casa pode ter até cinco banheiros;

Cada tipo de Imóvel deve ter um método para calcular seu valor com base nas seguintes
especificações:

Uma casa com quintal tem um acréscimo de 30% no seu valor;

Um apartamento deve ter o valor do seu condomínio somado ao valor base;

Uma Kitnet não tem alterações no seu valor base;

*/

class Imovel{
    endereco
    cep
    area
    quantidadeBanheiros
    quantidadeQuartos
    pessoasImovel
    valor
    

    constructor(endereco, cep, area, quantidadeBanheiros, quantidadeQuartos, pessoasImovel, valor ){
        this.endereco = endereco
        this.cep = cep
        this.area = area
        this.quantidadeBanheiros = quantidadeBanheiros
        this.quantidadeQuartos = quantidadeQuartos
        this.pessoasImovel = pessoasImovel
        this.valor = valor
    }
}

class Pessoa{
    nome
    cpf
    dataNascimento

}

class Casa extends Imovel{
    comQuintal

    constructor(endereco, cep, area, quantidadeBanheiros, quantidadeQuartos, pessoasImovel, valor, comQuintal){
        super(endereco, cep, area, quantidadeBanheiros, quantidadeQuartos, pessoasImovel, valor)
        this.comQuintal = comQuintal

       if(this.quantidadeBanheiros>5){
        this.quantidadeBanheiros = 5
       }
    }

    AdicionarPessoa(){
        this.pessoasImovel = this.pessoasImovel + 1
        alert("Pessoa adicionada com sucesso")
    }

    RemoverPessoa(){
        this.pessoasImovel = this.pessoasImovel - 1
        alert("Pessoa removida com sucesso")
    }

    CalcularValor(){
        if(this.comQuintal == true){
            this.valor = (this.valor/100) * 130
        }
    }
}

class Apartamento extends Imovel{
    andar
    valorCondominio

    constructor(endereco, cep, area, quantidadeBanheiros, quantidadeQuartos, pessoasImovel, valor, andar, condominio){
        super(endereco, cep, area, quantidadeBanheiros, quantidadeQuartos, pessoasImovel, valor)
        this.andar = andar
        this.condominio = condominio

       if(this.quantidadeBanheiros>3){
        this.quantidadeBanheiros = 3
       }
    }



    AdicionarPessoa(){
        this.pessoasImovel = this.pessoasImovel + 1
        alert("Pessoa adicionada com sucesso")
    }

    RemoverPessoa(){
        this.pessoasImovel = this.pessoasImovel - 1
        alert("Pessoa removida com sucesso")
    }

    CalcularValor(){
        this.valor = this.valor + this.condominio
    }
}

class Kitnet extends Imovel{
    
    constructor(endereco, cep, area, quantidadeBanheiros, quantidadeQuartos, pessoasImovel, valor){
        super(endereco, cep, area, quantidadeBanheiros, quantidadeQuartos, pessoasImovel, valor)

       if(this.quantidadeBanheiros>2){
        this.quantidadeBanheiros = 2
       }
    }


    AdicionarPessoa(){
        this.pessoasImovel = this.pessoasImovel + 1
        alert("Pessoa adicionada com sucesso")
    }

    RemoverPessoa(){
        this.pessoasImovel = this.pessoasImovel - 1
        alert("Pessoa removida com sucesso")
    }
}

let casa = new Casa("Rua alvinopolis", 35160179, 240, 6, 5, 8, 350, true)

let apartamento = new Apartamento("Rua alvinopolis", 35160179, 100, 2, 5, 7, 300, 5, 100)

let kitnet = new Kitnet("Rua alvinopolis", 35160179, 50, 6, 1, 7, 250)