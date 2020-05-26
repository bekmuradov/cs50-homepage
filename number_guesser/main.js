/* jshint esversion: 6 */

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();


function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
   
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.className = 'alert alert-success';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
      lastResult.className = "alert alert-danger";
      if(userGuess < randomNumber) {
        lastResult.textContent = 'Last guess was too low!';
      } else if(userGuess > randomNumber) {
        lastResult.textContent = 'Last guess was too high!';
      }
    }
   
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

  // checkGuess();
  guessSubmit.addEventListener('click', checkGuess);
  guessField.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 || e.code === 13 || e.code === "Enter" || e.code === "NumpadEnter") {
      checkGuess();
    }
  });

  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start new game";
    resetButton.className = "btn btn-success";
    document.body.querySelector(".container-sm").appendChild(resetButton);
    // document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
    
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i=0; i< resetParas.length; i++) {
      resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.className = "lastResult";
    
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }