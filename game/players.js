export class Player {
    constructor(name, setGameBoardCallback) {
        this.name = name
        this.weapon = undefined
        this.potion = undefined
        this.health = 100
        this.setGameBoard = setGameBoardCallback
    }
    
    attack(enemy){
        enemy.health -= this.weapon.damage
        this.setGameBoard()
    }
    restoreHealth(){
        this.health += this.potion.restore
        this.setGameBoard()
    }
    
    getWeapon(weapon){
        this.weapon = weapon
        this.setGameBoard()
    }

    getPotion(potion){
        this.potion = potion
        this.setGameBoard()
    }
}