import { Weapon } from './game/weapons.js'
import { Potion } from './game/potions.js'
import { Player } from './game/players.js'

// class Weapon {
//     constructor(name, damage) {
//         this.name = name
//         this.damage = damage
//     }
// }

const weapon1 = new Weapon('Fire Sword', 10)
const weapon2 = new Weapon('TNT', 20)
const weapon3 = new Weapon('Flame Thrower', 30)
const weapon4 = new Weapon('Laser', 40)


// class Potion {
//     constructor(name, restore){
//         this.name = name
//         this.restore = restore
//     }
// }

const potion1 = new Potion('Potion', 20)
const potion2 = new Potion('Super Potion', 40)
const potion3 = new Potion('Hyper Potion', 60) 
const potion4 = new Potion('Ultra Potion', 80)


// class Player {
//     constructor(name) {
//         this.name = name
//         this.weapon = undefined
//         this.potion = undefined
//         this.health = 100
//     }
//     attack(enemy){
//         enemy.health -= this.weapon.damage
//         setGameBoard()
//     }
//     restoreHealth(){
//         if(this.health == 100) return
//         else if((this.health + this.potion.restore) > 100){
//             this.health = 100
//         } else {
//             this.health += this.potion.restore
//         }
//         setGameBoard()
//     }
//     getWeapon(weapon){
//         this.weapon = weapon
//         setGameBoard()
//     }
//     getPotion(potion){
//         this.potion = potion
//         setGameBoard()
//     }
// }

// const player1 = new Player('Francisco')
// const player2 = new Player('Bupkis')

let gameOver = false

function setGameBoard(){
    if(gameOver) return

    player1Name.innerText = player1.name
    if(!player1.weapon){
        player1Weapon.innerText = 'None'
    }
    else {
        player1Weapon.innerText = player1.weapon.name
    }
    if(!player1.potion){
        player1Potion.innerText = 'None'
    }
    else {
        player1Potion.innerText = player1.potion.name
    }

    player2Name.innerText = player2.name
    if(!player2.weapon){
        player2Weapon.innerText = 'None'
    }
    else {
        player2Weapon.innerText = player2.weapon.name
    }
    if(!player2.potion){
        player2Potion.innerText = 'None'
    }
    else {
        player2Potion.innerText = player2.potion.name
    }

    if(player1.health <= 0){
        player1Health.innerText = `${player1.name} is no more...`
        gameOver = true
        document.getElementById('gameOver').style.visibility = 'visible'
    } else if(player2.health <= 0){
        player2Health.innerText = `${player2.name} is no more...`
        gameOver = true
        document.getElementById('gameOver').style.visibility = 'visible'
    } else {
        player1Health.innerText = player1.health
        player2Health.innerText = player2.health
    }
}

const player1 = new Player('Francisco', setGameBoard)
const player2 = new Player('Bupkis', setGameBoard)

// Attach players to the global `window` object
window.player1 = player1;
window.player2 = player2;

// Attach weapons and potions to the global `window` object (optional, if needed in HTML)
window.weapon1 = weapon1;
window.weapon2 = weapon2;
window.weapon3 = weapon3;
window.weapon4 = weapon4;
window.potion1 = potion1;
window.potion2 = potion2;
window.potion3 = potion3;
window.potion4 = potion4;

setGameBoard()