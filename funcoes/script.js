function areaQuadrado(lado)
{
    return lado;
}


function pi()
{
    return 3.14;
}

var total = 5 * pi();

console.log(areaQuadrado(2));
console.log(total);

function imc(peso, altura)
{
    const imc = peso / (altura **2 );
    return imc;
}

console.log(imc(67, 1.74));


var qtd = 0;
addEventListener('click', function(){
    console.log(`Clicou ${++qtd} vezes`);
});

function paisesVisitados(paisesVisitados)
{
     var totalPaises = 193;
     return `Faltam ${totalPaises - paisesVisitados} paises `;
}


function verifyValue(value)
{
    if(value == true){
        console.log("The value is truthy");
    } else {
        console.log("The value isn't truthy");
    }
}

function perimeter(side)
{
    return side * 4;
}



function showName(firstName, lastName)
{
    var firstName = 'Eder'; 
    var lastName = 'asdasdasdasdsa';
  console.log(`First name: ${firstName}, last name ${lastName}`);
}


addEventListener('scroll', showName);
