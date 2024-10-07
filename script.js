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
        this.weapon = undefined
        this.potion = undefined
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
    } else if(player2.health <= 0){
        player2Health.innerText = `${player2.name} is no more...`
        gameOver = true
    } else {
        player1Health.innerText = player1.health
        player2Health.innerText = player2.health
    }
}

setGameBoard()