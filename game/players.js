class Player {
    constructor(name) {
        this.name = name
        this.weapons = []
        this.health = 100
        this.attack = function(enemy){
            enemy.health -= weapon.damage
        }
    }

    getWeapon(weapon){
        this.weapons.push(weapon)
    }
}