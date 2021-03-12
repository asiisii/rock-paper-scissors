class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
  }

  countWins() {
    this.wins++;
  }
  saveScoreToLocalStorage() {
    localStorage.setItem(`${this.name}`, JSON.stringify(this));
  }

  retreiveFromLocalStorage() {
    var scores = JSON.parse(localStorage.getItem (`${this.name}`)) || 0;
    return scores;
  }
}
