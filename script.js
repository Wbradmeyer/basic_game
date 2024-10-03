import { Player } from "./game/players"

weapon1 = {
    name: 'Fire Sword',
    damage: 10
}

weapon2 = {
    name: 'TNT',
    damage: 20
}

potion1 = {
    name: 'Speed Potion',
    ability: 'Makes you go really fast!',
    restore: 5
}

potion2 = {
    name: 'Invisibility Potion',
    ability: "Makes it so they can't see ya!",
    restore: 10
}

potion3 = {
    name: 'Health Potion',
    ability: 'Restores your health',
    restore: 20
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

function getWeapon(weapon, player){
    player.weapon = weapon
    setGameBoard()
}

function getPotion(potion, player){
    player.potion = potion
    setGameBoard()
}

setGameBoard()