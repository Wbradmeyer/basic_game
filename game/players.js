class Player {
    constructor(name) {
        this.name = name
        this.weapons = []
        this.potions = []
        this.health = 100
        this.attack = function(enemy){
            enemy.health -= weapon.damage
        }
        this.restoreHealth = function(self){
            self.health += potion.restore
        }
    }

    getWeapon(weapon){
        this.weapons.push(weapon)
    }

    getPotion(potion){
        this.potions.push(potion)
    }
}