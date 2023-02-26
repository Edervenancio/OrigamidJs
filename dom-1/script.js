//window.alert();

const href = window.location.href;

console.log(href);

const h1Selecionado = document.querySelector('h1');

const h1Classes = h1Selecionado.classList;


function teste(){
    console.log('clicou em', h1Selecionado.innerText);
}
h1Selecionado.addEventListener('click', teste)


const elementoAtivo = document.querySelector('.ativo');


const language = window.navigator.language;

console.log(language);

const width = window.innerWidth;
console.log(width)