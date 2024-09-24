const clock=document.querySelector('#clock');
setInterval(function(){
let d=new Date;
clock.innerHTML=d.toLocaleTimeString();
},1000);