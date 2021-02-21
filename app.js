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
    winningNum = getRandomNum(min, max);
    guessesLeft = 3;

//UI Elements
const UIgameWrapper = document.getElementById('game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.getElementById('guess-btn'),
      UIguessInput = document.getElementById('guess-input'),
      UImessage = document.querySelector('.message');

//Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

//Play again event listener
UIgameWrapper.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})


//Listen for guess
UIguessBtn.addEventListener('click', checkNum);

function checkNum (){
  let guess = parseInt(UIguessInput.value);
  

  if(!guess || isNaN(guess) || guess > max || guess < min){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  if(guess === winningNum){
    //game over - won
    gameOver(true, `${winningNum} is correct! YOU WIN`);
  } else {
    //Wrong number
      guessesLeft -= 1;
      
      if(guessesLeft === 0){
        //game over - lost
        gameOver(false, `YOU LOSE! Correct number is ${winningNum}`);
      } else {
        
        //game continues - answer wrong

        //Set input border color
        UIguessInput.style.borderColor = 'red';
        //Tell user its a wrong number
        setMessage(`${guess} is not correct.${guessesLeft} guesses left`);
        //Clear input value
        UIguessInput.value = '';
      }
  }
  console.log(guess)
}
//Game over 
function gameOver(won, msg){
    //Set color var
    let color;
    won === true ? color = 'green': color = 'red';

    //Disable input
    UIguessInput.disabled = true;

    //Set input border color
    UIguessInput.style.borderColor = color;

    //Tell user its a wrong number
    setMessage(msg, color);

    //play again?
    UIguessBtn.value = 'Play again';
    //add class to guessBtn
    UIguessBtn.className += 'play-again';
}

//setMessage function
function setMessage(message, color){
  UImessage.style.color = color;
  UImessage.textContent = message;
}
//getWiningNum function
function getRandomNum(min, max){
 return Math.floor(Math.random() * (max - min +1 ) + min);
}