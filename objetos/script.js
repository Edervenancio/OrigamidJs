var pessoa = {
    nome: 'Eder',
    idade: 45,
    profissao: 'dev',
    faculdade: 'fatec'
};

var quadrado = {
    lados: 4,
    area: function(lado){
         return lado*lado
        },
    perimetro: function(lado){
        return this.lados * lado;
    }
}

console.log(pessoa.nome);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(2));


var menu = {
    width: 800,
    height: 50,
    backgroundColor: 'green',
    metadeHeight() { 
        return this.height / 2
    }
};

menu.backgroundColor = 'blue';

menu.esconder = function(){
    console.log('Escondi');
}
var bg = menu.backgroundColor; 

var dados = {
    nome: 'Eder',
    idade: 320,
    sobrenome: 'dasdas'
};

dados.nomeCompleto = function(){
   return `${this.nome} ${this.sobrenome}`; 
};

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    latir(pessoa){
        if(pessoa === 'homem'){
            return 'latir';
        } else{
            return 'nada';
        }
    }
}


var centimetros = 1.78.toFixed();


var nomeMinusculo = 'Eder'.toLowerCase();

var btn = document.querySelector('.btn');
// id.
// add event listener
// click


var contagem = 'teste de contagem';
// contagem.length()
// contagem.toupper
// contagem.tolower



