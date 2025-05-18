// Importing the Weapon, Potion, and Player classes from their respective modules
import { Weapon } from './game/weapons.js'
import { Potion } from './game/potions.js'
import { Player } from './game/players.js'

// Creating weapon instances with names and damage values
const weapon1 = new Weapon('Fire Sword', 10)
const weapon2 = new Weapon('TNT', 20)
const weapon3 = new Weapon('Flame Thrower', 30)
const weapon4 = new Weapon('Laser', 40)

// Creating potion instances with names and healing values
const potion1 = new Potion('Potion', 20)
const potion2 = new Potion('Super Potion', 40)
const potion3 = new Potion('Hyper Potion', 60) 
const potion4 = new Potion('Ultra Potion', 80)

// Variable to track the game state
let gameOver = false

// Function to set the game board with player information
function setGameBoard(){
    // If the game is over, do not update the board
    if(gameOver) return

    // Update player 1's information on the board 
    player1Name.innerText = player1.name
    if(!player1.weapon){
        player1Weapon.innerText = 'None' // Display 'None' if no weapon is equipped
    }
    else {
        player1Weapon.innerText = player1.weapon.name // Display the name of the equipped weapon
    }
    if(!player1.potion){
        player1Potion.innerText = 'None' // Display 'None' if no potion is equipped
    }
    else {
        player1Potion.innerText = player1.potion.name // Display the name of the equipped potion
    }

    // Update player 2's information on the board
    player2Name.innerText = player2.name
    if(!player2.weapon){
        player2Weapon.innerText = 'None' // Display 'None' if no weapon is equipped
    }
    else {
        player2Weapon.innerText = player2.weapon.name // Display the name of the equipped weapon
    }
    if(!player2.potion){
        player2Potion.innerText = 'None' // Display 'None' if no potion is equipped
    }
    else {
        player2Potion.innerText = player2.potion.name // Display the name of the equipped potion
    }

    // Check if either player's health is less than or equal to 0
    if(player1.health <= 0){
        player1Health.innerText = `${player1.name} is no more...` // Display a message if player 1 is defeated
        gameOver = true // Set gameOver to true to stop the game
        document.getElementById('gameOver').style.visibility = 'visible' // Show the game over message
    } else if(player2.health <= 0){
        player2Health.innerText = `${player2.name} is no more...` // Display a message if player 2 is defeated
        gameOver = true // Set gameOver to true to stop the game
        document.getElementById('gameOver').style.visibility = 'visible' // Show the game over message
    } else {
        // If the game is not over, update the health of both players
        player1Health.innerText = player1.health
        player2Health.innerText = player2.health
    }
}

// Create two player instances with names and the setGameBoard function as a callback
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

// Initialize the game board with player information
setGameBoard()