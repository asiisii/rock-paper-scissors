let ripple1 = document.getElementById('player-side');
let ripple2 = document.getElementById('robo-side');
let roboWeapons1 = document.getElementById('roboWeapon1');
let yourWeapon1 = document.getElementById('yourWeapon1');
let humanPoints = document.getElementById('humanPoints');
let robotPoints = document.getElementById('robotPoints');
let announcement = document.getElementById('announcement');
let weapon = document.querySelectorAll('.weapon');
let restart = document.getElementById('restart');

let game = new Game();

window.addEventListener('load', startGame);
restart.addEventListener('click', restartGame);
for (var i = 0; i < weapon.length; i++) {
  weapon.item(i).addEventListener('click', displayResult);

}



function startGame() {
  game.getPlayersScore();
}

function displayResult() {
  game.yourWeaponSelection(event);
  game.roboWeaponSelection(0,3);
  announceWinner();
  game.resetBoard();
}

function displayRoboWeapon() {
  if(game.roboWeapon === 'rock'){
    roboWeapon1.innerHTML = `<img class="mini-weapon" id="0" src="imgs/right-rock.png" alt="rock pic">`;
  }else if (game.roboWeapon === 'paper') {
    roboWeapon1.innerHTML = `<img class="mini-weapon" id="0" src="imgs/right-paper.png" alt="paper pic">`;
  }else {
    roboWeapon1.innerHTML = `<img class="mini-weapon" id="0" src="imgs/right-scissors.png" alt="scissors pic">`;
  }
}

function displayYourWeapon() {
  if(game.yourWeapon === 'rock'){
    yourWeapon1.innerHTML = `<img class="mini-weapon" id="0" src="imgs/left-rock.png" alt="rock pic">`;
  }else if (game.yourWeapon === 'paper') {
    yourWeapon1.innerHTML = `<img class="mini-weapon" id="0" src="imgs/left-paper.png" alt="paper pic">`;
  }else {
    yourWeapon1.innerHTML = `<img class="mini-weapon" id="0" src="imgs/left-scissors.png" alt="scissors pic">`;
  }
}

function announceWinner() {
  if (game.checkDraw()) {
    announcement.innerText = `IT'S A DRAW!`;
  }else if (game.checkWinner()) {
    announcement.innerText = `${game.human.name} WON!`;
  }else {
    announcement.innerText = `${game.robot.name} WON!`;
  }
  return announcement.innerText;
}

function restartGame() {
  localStorage.clear();
  location.reload();
}
