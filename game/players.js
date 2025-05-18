// The Player class represents a player in the game
export class Player {
    constructor(name, setGameBoardCallback) {
        this.name = name
        this.weapon = undefined
        this.potion = undefined
        this.health = 100
        this.setGameBoard = setGameBoardCallback
    }
    
    attack(enemy) {
        // Generate a random number between 1 and 100
        const hitChance = Math.random() * 100;

        // Check if the random number is less than or equal to the weapon's accuracy
        if (hitChance <= this.weapon.accuracy) {
            // If the attack hits, reduce the enemy's health
            enemy.health -= this.weapon.damage;
            const message = `${this.name} hits ${enemy.name} for ${this.weapon.damage} damage!`;
            console.log(message);
            this.updateGameLog(message);
        } else {
            // If the attack misses, log a miss message
            const message = `${this.name} misses the attack!`;
            console.log(message);
            this.updateGameLog(message);
        }

        // Update the game board after the attack
        this.setGameBoard();
    }

    updateGameLog(message) {
        // Get the log area element
        const logElement = document.getElementById('gameLog');
        // Append the message to the log area
        logElement.innerHTML += `<p>${message}</p>`;
        // Scroll to the bottom of the log area
        logElement.scrollTop = logElement.scrollHeight;
    }

    getWeapon(weapon) {
        this.weapon = weapon; // Assign the weapon to the player
        const message = `${this.name} picked up a ${weapon.name}!`; // Log message for picking up a weapon
        this.updateGameLog(message); // Add the message to the game log
        this.setGameBoard(); // Update the game board
    }

    getPotion(potion) {
        this.potion = potion; // Assign the potion to the player
        const message = `${this.name} picked up a ${potion.name}!`; // Log message for picking up a potion
        this.updateGameLog(message); // Add the message to the game log
        this.setGameBoard(); // Update the game board
    }

    restoreHealth() {
        // Increase the player's health by the restore value of the equipped potion
        this.health += this.potion.restore;
        const message = `${this.name} restored ${this.potion.restore} health using a ${this.potion.name}!`; // Log message for restoring health
        this.updateGameLog(message); // Add the message to the game log
        this.setGameBoard(); // Update the game board
    }
}