weapon1 = {
    name: 'Fire Sword',
    damage: 10
}

weapon2 = {
    name: 'TNT',
    damage: 20
}

player1 = {
    name: 'Francisco',
    weapon: weapon1,
    potion: {},
    health: 100,
    attack: function(enemy, weapon){
        enemy.health -= weapon.damage
        setGameBoard()
    }
}

player2 = {
    name: 'Bupkis',
    weapon: weapon1,
    potion: {},
    health: 100,
    attack: function(enemy, weapon){
        enemy.health -= weapon.damage
        setGameBoard()
    }
}

potion1 = {
    name: 'Speed Potion',
    ability: 'Makes you go really fast!'
}

potion2 = {
    name: 'Invisibility Potion',
    ability: "Makes it so they can't see ya!"
}


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

setGameBoard()