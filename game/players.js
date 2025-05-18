// The Player class represents a player in the game
export class Player {
    constructor(name, setGameBoardCallback) {
        this.name = name
        this.weapon = undefined
        this.potion = undefined
        this.health = 100
        this.setGameBoard = setGameBoardCallback
    }
    
    attack(enemy){
        // Generate a random number between 1 and 100
        const hitChance = Math.floor(Math.random() * 100) + 1

        // if the hit chance is less than or equal to the weapon's accuracy
        if(hitChance <= this.weapon.accuracy){
            // The attack is successful, and the enemy's health is reduced by the weapon's damage
            enemy.health -= this.weapon.damage
            console.log(`${this.name} attacked ${enemy.name} with ${this.weapon.name} for ${this.weapon.damage} damage!`)
        }
        else {
            // The attack misses, and the enemy's health remains unchanged
            console.log(`${this.name} missed the attack!`)
        }
        this.setGameBoard()
    }
    restoreHealth(){
        // Increase the player's health by the restore value of the equipped potion
        this.health += this.potion.restore
        this.setGameBoard()
    }
    
    getWeapon(weapon){
        this.weapon = weapon // Assign the weapon to the player
        this.setGameBoard()
    }

    getPotion(potion){
        this.potion = potion // Assign the weapon to the player
        this.setGameBoard()
    }
}