let randomNumber= parseInt(Math.random()*100+1);

const userInput=document.querySelector('#guessField');
const submit=document.querySelector('#subt');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loOrHigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let num=1;

let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validate(guess);
    })
}

function validate(guess){
if(isNaN(guess)|| guess<1 || guess >100)
{
alert('Please enter a valid number');
}
else{
    prevGuess.push(guess);
    if(num===11)
        {
            displayGuess(guess);
            displayGuess(`game over the random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            check(guess);
        }
}
}
function check(guess){
if(guess<randomNumber)
    {
        displayMessage(`your number is low`);
    }
    else if(guess>randomNumber)
        {
            displayMessage(`your number is high`);
        }
        else if(randomNumber===guess){
            displayGuess('you guessed it right');
            endGame();
        }
}
function displayGuess(guess){
userInput.value='';
guessSlot.innerHTML+=`${guess} `;
num++;
remaining.innerHTML=`${11-num}`;
}
function displayMessage(message){
loOrHigh.innerHTML=`${message}`;
}
function endGame()
{
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML=`<h2 id="newgame">Start new game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame()
{
const button=document.querySelector('#newgame');
button.addEventListener('click',function(e){
    randomNumber= parseInt(Math.random()*100+1);
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    prevGuess=[];
    num=1;
    userInput.value='';
    guessSlot.innerHTML='';
    remaining.innerHTML='';
    playGame=true;
})
}