'use strict';

// Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const player3 = document.querySelector('.player--3');
const score0 = document.querySelector('.score--0');
const score1 = document.querySelector('.score--1');
const score2 = document.querySelector('.score--2');
const score3 = document.querySelector('.score--3');

const current0 = document.querySelector('current--0');
const current1 = document.querySelector('current--1');
const current2 = document.querySelector('current--2');
const current3 = document.querySelector('current--3');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
var diceDOM = document.querySelector('.dice');

let score,
currentScore,
current,activePlayer,
playing,
roundScores,
dice,
playerList;

function init() {
  score = [0, 0, 0, 0];
  current= [0,0,0,0];
  roundScores = 0;
  playerList = [0,1,2,3];
  activePlayer = 0;
  for (var i in playerList){
      score[i] = 0;
      current[i] = 0;
      console.log('score: '+ score[i],'current: ' +current[i]);
      //score[activePlayer] = current[activePlayer];
      //current[activePlayer] = 0.0;
      document.getElementById(`score--${activePlayer}`).textContent =
        score[i];
      playing = true;

  };
  //current = [0,0,0,0];




  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player3.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player2.classList.remove('player--active');
  player3.classList.remove('player--active');
  // dice == 0;

}
init();
diceDOM.style.display = 'none';
const zeroScores = function () {
  zeroScores[activePlayer] = 0.0;
  current[activePlayer] = 0.0;
  console.log('current: ' + current[activePlayer]);
  console.log('score: ' +score[activePlayer]);
};

const switchPlayer = function () {
  if (playing) {
    if (activePlayer === 0) {
      zeroScores();
      current[activePlayer] = 0.0;
      document.querySelector('#current--' + activePlayer).textContent =
        current[activePlayer];
      activePlayer = playerList[activePlayer + 1];
      console.log('player list: ' + playerList);
      console.log(playerList[activePlayer]);

      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    } else if (activePlayer === 1) {
      zeroScores();
      current[activePlayer] = 0.0;
      document.querySelector('#current--' + activePlayer).textContent =
        current[activePlayer];
      activePlayer = playerList[activePlayer + 1];

      console.log('player list: ' + playerList);
      console.log(playerList[activePlayer]);

      player1.classList.toggle('player--active');
      player2.classList.toggle('player--active');
    } else
    if (activePlayer === 2) {
      zeroScores();
      current[activePlayer] = 0.0;
      document.querySelector('#current--' + activePlayer).textContent =
        current[activePlayer];
      activePlayer = playerList[activePlayer + 1];

      console.log('player list: ' + playerList);
      console.log(playerList[activePlayer]);

      player2.classList.toggle('player--active');
      player3.classList.toggle('player--active');
    } else {
      zeroScores();
      current[activePlayer] = 0.0;
      document.querySelector('#current--' + activePlayer).textContent =
        current[activePlayer];
      activePlayer = 0;
      player0.classList.toggle('player--active');

      console.log('player list: ' + playerList);
      console.log(playerList[activePlayer]);

      player3.classList.toggle('player--active');
    }
    dice != 1 ? diceDOM.style.display = 'none' : diceDOM.style.display = 'block';
  }
};

// document.querySelector('#current--'+ activePlayer).textContent = dice;

// document.getElementById('score--'+ activePlayer).textContent = '0';
// document.getElementById('score--1').textContent = '0';
// document.querySelector('#current--' + activePlayer).textContent = '0';

btnRoll.addEventListener('click',function() {
  if (playing){
    // 1. create a random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. display the result
    diceDOM.style.display = 'block';
    diceDOM.src= './dice-img/dice-'+dice + '.PNG'
    // 3. update round score if the rolled number is not 1
    if (dice != 1) {
      current[activePlayer] += dice;
      console.log(current[activePlayer], current, 'score: '+ score[activePlayer]);
      document.querySelector('#current--' + activePlayer).textContent =
      current[activePlayer];

    } else {
      current[activePlayer] = 0.0;
      console.log('current after 1 shows: '+current[activePlayer]);
      document.querySelector(
        '#current--' + activePlayer
        ).textContent = current[activePlayer];

        switchPlayer();
        diceDOM.style.display = 'block';
      }

    }
});





// Starting conditions


// Rolling dice functionality

// button hold :
btnHold.addEventListener('click', function(){
  if (playing){

    // 1. Add current score to active player's score
    score[activePlayer] += current[activePlayer];
    current[activePlayer] = 0.0;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    // 2. Check if player's score is >= 100
    if (score[activePlayer] >=50){
      playing= false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
        diceDOM.style.display = 'none';
    } else {
      switchPlayer();
    }
    // if > 100: Finish the game
    // else switch player
  }

});


btnNew.addEventListener('click', function(){
  init();
  for (var i in playerList){
    document.querySelector('#current--' + i).textContent =
      0;
      document.querySelector('#score--' + i).textContent =
        0;
  }

});
