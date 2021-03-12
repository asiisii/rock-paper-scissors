class Game {
	constructor() {
		this.human = new Player('Asiisii');
		this.robot = new Player('Rusty Robo');
		this.weapons = ['rock', 'paper', 'scissors'];
	}

	roboWeaponSelection(min, max) {
		let index = parseInt(Math.random() * (max - min) + min);
		// console.log("robo index is: ",index);
		roboWeapon = this.weapons[index];
		console.log("roboWeapon is: ",roboWeapon);
		return roboWeapon;
	}

	yourWeaponSelection(event) {
	  let getId = parseInt(event.target.id);
	  yourWeapon = this.weapons[getId];
		console.log("yourWeapon is: ", yourWeapon);
	  return yourWeapon;
	}

 	checkDraw() {
	  if (yourWeapon === roboWeapon) {
	    return true;
	  }
	}

	checkWinner() {
		if ((yourWeapon === 'rock' && roboWeapon === 'scissors') ||
				(yourWeapon === 'paper' && roboWeapon === 'rock') ||
				(yourWeapon === 'scissors' && roboWeapon === 'paper')) {
			this.storeHumanScore();
			return true;
		}else {
			this.storeRobotScore();
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
}
