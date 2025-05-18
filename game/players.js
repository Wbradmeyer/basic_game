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
        // if weapon accuracy hits, deal damage, else skip
        // Reduce the enemy's health by the damage of the player's weapon
        enemy.health -= this.weapon.damage
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