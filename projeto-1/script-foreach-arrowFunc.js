// const imgs = document.querySelectorAll('img');

// // let i = 0;
// imgs.forEach(function(item, index, array){
//     // console.log(item, index, array);
// });


// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

// titulosArray.forEach(function(item, index, array){
//     // console.log(item, index, array);
// });

// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index, array) => {
//      console.log(item, index, array);
// });


const paragraph = document.querySelectorAll('p');

const paragraphArray = Array.from(paragraph);

// paragraphArray.forEach((item, index, array)=>{
//     console.log(item, index, array);
// })

paragraphArray.forEach((item)=>{
    console.log(item.innerText);
})


//console.log(paragraphArray)
