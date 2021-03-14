class Game {
	constructor() {
		this.human = new Player('YOU');
		this.robot = new Player('ROBO');
		this.weapons = ['rock', 'paper', 'scissors'];
		this.isGameOn = true;
		this.yourWeapon = null;
		this.roboWeapon = null;
	}

	roboWeaponSelection(min, max) {
		let index = parseInt(Math.random() * (max - min) + min);
		this.roboWeapon = this.weapons[index];
		displayRoboWeapon();
	}

	yourWeaponSelection(event) {
	  let getId = parseInt(event.target.id);
	  this.yourWeapon = this.weapons[getId];
		displayYourWeapon();
	}

 	checkDraw() {
	  if (this.yourWeapon === this.roboWeapon) {
	    return true;
	  }
	}

	checkWinner() {
		if ((this.yourWeapon === 'rock' && this.roboWeapon === 'scissors') ||
				(this.yourWeapon === 'paper' && this.roboWeapon === 'rock') ||
				(this.yourWeapon === 'scissors' && this.roboWeapon === 'paper')) {
			this.storeHumanScore();
			humanPoints.innerText = this.human.wins;
			return true;
		}else {
			this.storeRobotScore();
			robotPoints.innerText = this.robot.wins;
			return false;
		}
	}

	storeHumanScore() {
		this.human.countWins();
		this.human.saveScoreToLocalStorage();
	}

	storeRobotScore() {
		this.robot.countWins();
		this.robot.saveScoreToLocalStorage();
	}

	resetBoard() {
		setTimeout(function() {
			announcement.innerText = `Select your weapon`;
			yourWeapon1.innerHTML = ``;
			roboWeapon1.innerHTML = ``;
		}, 700);
	}

	getPlayersScore() {
    humanPoints.innerText = this.human.wins;
		robotPoints.innerText = this.robot.wins;
  }



}
