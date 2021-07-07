class Game {
    constructor(turnsLeft=10){
       this.turnsLeft = turnsLeft;
       this.currentTurn = null;
       this.turnNum = 1;
       this.playersLeft = []
       this.initiatePlayers();
       this.newTurn();
    };

    initiatePlayers() {
        let grace = new Fighter(name="Grace");
        let ulder = new Paladin(name="Ulder");
        let moana = new Monk(name="Moana");
        let draven = new Berserker(name="Draven");
        let carl = new Assassin(name="Carl");

        this.playersLeft.push(grace, ulder, moana, draven, carl);
    };

    newTurn() {
       this.currentTurn = new Turn(this.turnNum, this.playersLeft);
       this.turnsLeft -= 1;
    };
};

// Test

game = new Game();
console.log(game.playersLeft)