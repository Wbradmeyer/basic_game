export class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
        this.accuracy = 100 - damage/2;
    }
}