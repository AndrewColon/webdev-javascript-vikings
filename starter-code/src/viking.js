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
    receiveDamage(Damage) {
        this.health = this.health - Damage;
        if (Viking.health > 0) {
            return name + "has received" + Damage + "points of damage"
        }
        else if(Viking.health < 0) {
            return "NAME has died in act of combat";
        }
        
    }
}

// Saxon
class Saxon { }

// War
class War { }
