class Character {
    constructor(name, hp, dmg, mana) {
        this.name = name
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = "playing";
    };

    isLoser() {
        if (this.hp <= 0) {
            this.status = "loser";
            return true;
        } else {
            return false;
        };
    };

    takeDamage(dmgTaken) {
        this.hp -= dmgTaken;
        if (this.hp < 0) {
            this.hp = 0;
        };
    };

    dealDamage(victim) {
        if (!this.status === "loser" && !victim.isLoser()) {
            let lifeLeft = victim.hp;
            if (lifeLeft - this.dmg <= 0) {
                this.mana += 20;
            }
            victim.takeDamage(this.dmg);
        };
    };
};