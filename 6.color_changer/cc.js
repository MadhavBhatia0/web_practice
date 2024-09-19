// const body=document.querySelector('body');
// const button=document.querySelectorAll('.button');
// button.forEach(function(b){

// b.addEventListener('mouseover',function(e){
// switch(e.target.id)
// {
// case'grey':
//     body.style.backgroundColor="grey";
//     break;

// case 'white':
//     body.style.backgroundColor="white";
//     break;

// case'blue':
//     body.style.backgroundColor="blue";
//     break;

// case'yellow':
//     body.style.backgroundColor="yellow";
//     break;
// }
// });
// });

const body=document.querySelector('body');
const canvas=document.querySelector('.canvas');

canvas.addEventListener('mouseover',function(e){
console.log(e.target)
body.style.backgroundColor = e.target.id;
})






























