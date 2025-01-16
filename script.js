'use strict';

const buttons = document.querySelectorAll('button');
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const resultEl = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

const computerPlay = function () {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
};

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
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
