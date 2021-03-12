let roboWeapon = document.getElementById('roboWeapon');
let yourWeapon = document.getElementById('yourWeapon');
let announcement = document.getElementById('announcement');
let weapon = document.querySelectorAll('.weapon');
let game = new Game;

for (var i = 0; i < weapon.length; i++) {
  weapon.item(i).addEventListener('click', displayResult);
}

function displayResult() {
  game.roboWeaponSelection(0,3);
  game.yourWeaponSelection(event);
  announceWinner();
}

function announceWinner() {
  if (game.checkDraw()) {
    announcement.innerText = `It's a draw!`;
  }else if (game.checkWinner()) {
    announcement.innerText = `${game.human.name} won this round!`;
  }else {
    announcement.innerText = `${game.robot.name} won this round!`;
  }
  return announcement.innerText;
}
