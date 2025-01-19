'use strict';

// Selected elements
const buttons = document.querySelectorAll('button');
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const resultEl = document.getElementById('result');
const winnerEl = document.getElementById('winner');
const resetBtn = document.querySelector('.reset');

// Global variables
let playerScore = 0;
let computerScore = 0;

// Logic to reset the game
const resetFunction = function () {
  playerScore = 0;
  computerScore = 0;
  resultEl.textContent = '';
  userScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  winnerEl.textContent = '';
};

// Function to update history
// const updateHistory = function (userPoints, cpuPoints) {
//   const totalPoints = {
//     userPoints: userPoints,
//     cpuPoints: cpuPoints,
//   };

//   const historyDetails = document.querySelector('.history-container');
//   const history = JSON.parse(localStorage.getItem('playHistory')) || [];

//   history.push(userPoints, cpuPoints);

//   localStorage.setItem('playHistory', JSON.stringify(history));

//   let historyHTML = '';

//   history.forEach((totalPoints, index) => {
//     historyHTML += `<p>${index + 1}. ${
//       totalPoints.userPoints > cpuPoints ? 'You won!' : 'You lost!'
//     } ${userPoints} - ${cpuPoints}</p>`;
//   });

//   historyDetails.innerHTML = historyHTML;
// };

// Handles clicks for each button move
buttons.forEach(button =>
  button.addEventListener('click', function () {
    // Checks winning points and then restarts the game onclick of any buttons
    if (playerScore === 10 || computerScore === 10) {
      resetFunction();

      const result = playRound(button.id, computerPlay());
      resultEl.textContent = result;

      declareWinner(playerScore, computerScore);
    } else {
      const result = playRound(button.id, computerPlay());
      resultEl.textContent = result;

      declareWinner(playerScore, computerScore);
    }
  })
);

// Computer play logic
const computerPlay = function () {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
};

// Logic for each play round
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

// Logic to declare the winner when winning point is reached
const declareWinner = function (playerScore, computerScore) {
  if (playerScore >= 10 && computerScore < 10) {
    winnerEl.textContent = `Congratulations!! You win!!! 🏆🏆`;
  } else if (playerScore === 10 && computerScore === 10) {
    winnerEl.textContent = `It ends in a Tie! Play Again?? 🎮`;
  } else if (playerScore < 10 && computerScore >= 10) {
    winnerEl.textContent = `Sorry!! You lose!! Play Again?? 😝🕹`;
  }
};

// Resets the game when clicked
resetBtn.addEventListener('click', resetFunction);
