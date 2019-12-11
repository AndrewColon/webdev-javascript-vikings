// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(Damage) {
        this.health = this.health - Damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }

    }
    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Vikingobject) {
        this.vikingArmy.push(Vikingobject);
    }
    addSaxon(Saxonobject) {
        this.saxonArmy.push(Saxonobject);
    }
    vikingAttack() {
        let randomSaxNum = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxNum];
        let randomVikNum = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikNum]
        randomSaxon.receiveDamage(randomViking.attack())
        this.saxonArmy.forEach((eachSax, i) => {
            if (eachSax.health <= 0) {
                this.saxonArmy.splice(i, 1);
            }
        })
       
    } 



    saxonAttack() {
        let randomSaxNum = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxNum];
        let randomVikNum = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikNum]
        randomViking.receiveDamage(randomSaxon.attack())
    }

    showStatus() {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day..."
        }
        else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}

