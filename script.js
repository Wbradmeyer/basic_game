// import { Player } from "./game/players"

class Weapon {
    constructor(name, damage) {
        this.name = name
        this.damage = damage
    }
}

const weapon1 = new Weapon('Fire Sword', 10)

const weapon2 = new Weapon('TNT', 20)


class Potion {
    constructor(name, restore){
        this.name = name
        this.restore = restore
    }
}

const potion1 = new Potion('Potion', 20)

const potion2 = new Potion('Super Potion', 40)

const potion3 = new Potion('Hyper Potion', 60)


class Player {
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

const player1 = new Player('Francisco')

const player2 = new Player('Bupkis')

// player1 = {
//     name: 'Francisco',
//     weapon: weapon1,
//     potion: potion1,
//     health: 100,
//     attack: function(enemy, weapon){
//         enemy.health -= weapon.damage
//         setGameBoard()
//     },
//     restoreHealth: function(self, potion){
//         self.health += potion.restore
//     }
// }

// player2 = {
//     name: 'Bupkis',
//     weapon: weapon1,
//     potion: potion1,
//     health: 100,
//     attack: function(enemy, weapon){
//         enemy.health -= weapon.damage
//         setGameBoard()
//     },
//     restoreHealth: function(self, potion){
//         self.health += potion.restore
//         setGameBoard()
//     }
// }

function setGameBoard(){
    player1Name.innerText = player1.name
    player1Weapon.innerText = player1.weapon.name
    player2Name.innerText = player2.name
    player2Weapon.innerText = player2.weapon.name
    if(player1.health <= 0){
        player1Health.innerText = `${player1.name} is no more...`
        player2Health.innerText = player2.health
    } else if(player2.health <= 0){
        player1Health.innerText = player1.health
        player2Health.innerText = `${player2.name} is no more...`
    } else {
        player1Health.innerText = player1.health
        player2Health.innerText = player2.health
    }
}

// function getWeapon(weapon, player){
//     player.weapon = weapon
//     setGameBoard()
// }

// function getPotion(potion, player){
//     player.potion = potion
//     setGameBoard()
// }

setGameBoard()