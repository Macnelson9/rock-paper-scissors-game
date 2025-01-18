'use strict';

const buttons = document.querySelectorAll('button');
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const resultEl = document.getElementById('result');
const winnerEl = document.getElementById('winner');
const resetBtn = document.querySelector('.reset');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button =>
  button.addEventListener('click', function () {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;

    declareWinner(playerScore, computerScore);
  })
);

const computerPlay = function () {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
};

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++;
    userScoreEl.textContent = playerScore;

    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;

    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

const declareWinner = function (playerScore, computerScore) {
  if (playerScore >= 10 && computerScore < 10) {
    winnerEl.textContent = `Congratulations!! You win!!! 🏆🏆`;
  } else if (playerScore === 10 && computerScore === 10) {
    winnerEl.textContent = `It ends in a Tie! Play Again?? 🎮`;
  } else if (playerScore < 10 && computerScore >= 10) {
    winnerEl.textContent = `Sorry!! You lose!! Play Again?? 😝🕹`;
  }
};

resetBtn.addEventListener('click', function () {
  playerScore = 0;
  computerScore = 0;
  resultEl.textContent = '';
  userScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  winnerEl.textContent = '';
});
