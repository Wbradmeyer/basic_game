export class Player {
    constructor(name) {
        this.name = name
        this.weapon = {}
        this.potion = {}
        this.health = 100
        this.attack = function(enemy){
            enemy.health -= this.weapon.damage
        }
        this.restoreHealth = function(){
            this.health += this.potion.restore
        }
    }

    getWeapon(weapon){
        this.weapon = weapon
    }

    getPotion(potion){
        this.potion = potion
    }
}