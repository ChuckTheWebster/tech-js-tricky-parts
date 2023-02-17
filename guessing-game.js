'use strict';

/** Guessing game 
 *
 * @returns
 */
function guessingGame() {
  let randomNumber = Math.floor(Math.random() * 100);
  let guesses = 0;
  let win = false;

  return function guessRandomNumber(num) {
    if (win === true) return "The game is over, you already won!"
    guesses += 1;
    if (num > randomNumber) return `${num} is too high!`
    if (num < randomNumber) return `${num} is too low!`
    if (num === randomNumber && win === false) {
      win = true;
      return `You win! You found ${num} in ${guesses} guesses!`
    }
  }
}

module.exports = { guessingGame };
