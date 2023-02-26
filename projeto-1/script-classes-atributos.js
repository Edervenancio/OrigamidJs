const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
// menu.classList.toggle('azul');
// console.log(menu.classList[2]);

if(menu.classList.contains('azul')){
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho';


console.log(menu.className);

const animais = document.querySelector('.animais');

console.log(animais.attributes[2]); 

const img = document.querySelector('img');

console.log(img.getAttribute('src'));



img.setAttribute('alt', 'é uma raposa');

const srcImg = img.getAttribute('alt');

const possuiAlt = img.hasAttribute('alt');

console.log(possuiAlt);

console.log(srcImg);

const carro = {
    portas: 4,
    andou: function(km){
        console.log(`Andou ${km}km`);
    }
}

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
});



itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');


const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAtributoImg = img.hasAttribute('alt');
    console.log(img, possuiAtributoImg);
});


const link = document.querySelector('a[href^="http"]');

link.setAttribute('href', 'https://www.google.com/');
console.log(link);