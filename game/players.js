import { setGameBoard } from "../script"

export class Player {
    constructor(name) {
        this.name = name
        this.weapon = {}
        this.potion = {}
        this.health = 100
    }
    
    attack(enemy){
        enemy.health -= this.weapon.damage
        setGameBoard()
    }
    restoreHealth(){
        this.health += this.potion.restore
        setGameBoard()
    }
    
    getWeapon(weapon){
        this.weapon = weapon
        setGameBoard()
    }

    getPotion(potion){
        this.potion = potion
        setGameBoard()
    }
}