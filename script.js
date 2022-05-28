'use strict';

// -----------------SELECTING THE ELEMENTS---------------
const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.querySelector('#score--1');
const current0Elem = document.getElementById('current--0');
const current1Elem = document.getElementById('current--1');

const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// -----------------STARTING CONDITION-------------------
// score0Elem.textContent = 0;
// score1Elem.textContent = 0;
// diceElem.classList.add('hidden');

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;
let currentScore, activePlayer, playing, scores;

const init = function () {
  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  diceElem.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // score0Elem.textContent = 0;
  // score1Elem.textContent = 0;
  current0Elem.textContent = 0;
  current1Elem.textContent = 0;
  player0Elem.classList.remove('player--winner');
  player1Elem.classList.remove('player--winner');
  player0Elem.classList.add('player--active');
  player1Elem.classList.remove('player--active');
};
init();

// ----------REFRACTING THE CODE / DRY PRINCIPLE------
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0Elem.classList.toggle('player--active');
  player1Elem.classList.toggle('player--active');
};

// -----------ROLLING THE DICE FUNCTIONALITY--------------
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating A Random Dice Roll:-
    const dice = Math.trunc(Math.random() * 6 + 1);
    //   console.log(dice);

    // Display Dice:-
    diceElem.classList.remove('hidden');
    diceElem.src = `dice-${dice}.png`;

    // 2. Check For Rolled Is (1):-
    if (dice !== 1) {
      // Add Dice To Current Score:-
      // currentScore = currentScore + dice;
      currentScore += dice;
      // current0Elem.textContent = currentScore; // Change Later Dynamic
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch To The Next Player
      // Dice === 1, Then
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;

      // player0Elem.classList.toggle('player--active');
      // player1Elem.classList.toggle('player--active');
      switchPlayer();
    }
  }
});

// -------------HOLD SCORE IN PLAYER'S-----------------
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.Adding Current Score To Active Player's Score:-
    scores[activePlayer] += currentScore;
    // scores[something] = score[something] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check If Player's Score is >= 100:-
    if (scores[activePlayer] >= 100) {
      // Finishing The Game:-
      playing = false;
      diceElem.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch To The Next Player:-
      switchPlayer();
    }
  }
});

// -----------------RESET FUNCTIONALITY-------------------
// btnNew.addEventListener('click', () => {
//   score0Elem.textContent = 0;
//   score1Elem.textContent = 0;
//   current0Elem.textContent = 0;
//   current1Elem.textContent = 0;
//   player0Elem.classList.remove('player--winner');
//   player1Elem.classList.remove('player--winner');
//   player0Elem.classList.add('player--active');
//   player1Elem.classList.remove('player--active');
// });
btnNew.addEventListener('click', init);

// git init
// git add -a
// git commit -m
// git commit -a -m
// git log
// git branch (newOfBranch)
// git checkout (newOfBranch)
// git merge (newOfBranch)
