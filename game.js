class Game {
    constructor(turnsLeft=10){
       this.turnsLeft = turnsLeft;
       this.currentTurn = null;
       this.turnNum = 1;
       this.playersLeft = {};
       this.initiatePlayers();
       this.newTurn();
    };

    createPlayer(name, type) {
        let player = new type(name);
        this.playersLeft[player.name] = player;
    };

    initiatePlayers() {
        firstNames = ["Grace", "Ulder", "Moana", "Draven", "Carl"];
        types = [Fighter, Paladin, Monk, Berserker, Assassin];

    };

    newTurn() {
        this.currentTurn = new Turn(this.turnNum, this.playersLeft);
        this.turnsLeft -= 1;
    };
};

// Test

game = new Game();
console.log(game.playersLeft)