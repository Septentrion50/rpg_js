function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function shuffle(arr) {
    const n = arr.length;
    
    for(let i=0 ; i<n-1 ; ++i) {
    let j = getRandomInt(n);
    
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    };
    
    return arr;
};

class Turn {
    constructor(num, charactersLeft) {
        this.num = num;
        this.charLeft = charactersLeft;
        this.turnStatus = "active";
    };

    startTurn() {
        console.log(`It's turn ${this.num}`);
    };

    choosePlayer() {
        if (this.charLeft.length > 0){
            return shuffle(this.charLeft).pop();
        } else {
            this.turnStatus = "over";
        };
    };

    play() {
        let attacker = this.choosePlayer();
        let target = prompt("Who is your target? \n");
        let blowType = prompt("What type of attack do you want to use? \n1: Normal\n2: Special\n");
        if (blowType === "1") {
            attacker.dealDamage(this.charLefttarget);
        } else if (blowType === "2"){
            attacker.specialAttack(target);
        } else {
            console.log("Please enter either 1 or 2.");
        };
    };
};