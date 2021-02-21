/*
GAME FUNCTION:
- player must guess a number between a min and max
- player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- let player choose to play again
*/

//Define vars
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const UIgame = document.getElementById('game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.getElementById('guess-btn'),
      UIguessInput = document.getElementById('guess-input'),
      UImessage = document.querySelector('.message');

//Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

//Listen for guess
UIguessBtn.addEventListener('click', checkNum);

function checkNum (){
  let guess = parseInt(UIguessInput.value);
  

  if(isNaN(guess) || guess > max || guess < min){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  if(guess === winningNum){
    //Disable input
    UIguessInput.disabled = true;
    //Set input border color
    UIguessInput.style.borderColor = 'green';
    //Change text of submit button
    UIguessBtn.value = 'Play again'
    setMessage(`${winningNum} is correct! YOU WIN`, 'green');
  }
  console.log(guess)
}

function setMessage(message, color){
  UImessage.style.color = color
  UImessage.textContent = message;
}