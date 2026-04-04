// game.js
class ClickerGame {
    constructor() {
        this.score = 0;
        this.clickValue = 1;
        this.upgrades = [
            { name: "Double Click", cost: 10, multiplier: 2 },
            { name: "Triple Click", cost: 30, multiplier: 3 },
        ];
        this.passiveIncome = 0;
        this.clicksMade = 0;
        this.upgradesPurchased = 0;
        
        this.loadGame();
        this.startPassiveIncome();
    }

    click() {
        this.score += this.clickValue;
        this.clicksMade++;
        this.saveGame();
    }

    purchaseUpgrade(index) {
        const upgrade = this.upgrades[index];
        if (this.score >= upgrade.cost) {
            this.score -= upgrade.cost;
            this.clickValue *= upgrade.multiplier;
            this.upgradesPurchased++;
            this.saveGame();
            console.log(`Purchased Upgrade: ${upgrade.name}`);
        } else {
            console.log('Not enough score to purchase upgrade.');
        }
    }

    startPassiveIncome() {
        setInterval(() => {
            this.score += this.passiveIncome;
            this.saveGame();
        }, 1000); // Generates passive income each second
    }

    addPassiveIncome(amount) {
        this.passiveIncome += amount;
    }

    saveGame() {
        localStorage.setItem('clickerGame', JSON.stringify(this));
    }

    loadGame() {
        const savedGame = localStorage.getItem('clickerGame');
        if (savedGame) {
            const gameData = JSON.parse(savedGame);
            Object.assign(this, gameData);
        }
    }

    getStatistics() {
        return {
            score: this.score,
            clicksMade: this.clicksMade,
            upgradesPurchased: this.upgradesPurchased
        };
    }
}

// Instantiate the game
const game = new ClickerGame();

// Example of how to use the game
document.getElementById('clickButton').addEventListener('click', () => game.click());
document.getElementById('upgradeButton').addEventListener('click', () => game.purchaseUpgrade(0));