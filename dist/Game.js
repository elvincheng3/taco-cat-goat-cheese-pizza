"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CardType_1 = require("./modules/CardType");
const Player_1 = require("./Player");
class Game {
    constructor(numPlayers) {
        this.numPlayers = numPlayers;
        this.centerDeck = [];
        this.players = this.initializePlayers();
    }
    // initializes the players, distributing the cards evenly 
    initializePlayers() {
        let originalCards = [...Array(11).fill(CardType_1.CardType.Taco),
            ...Array(11).fill(CardType_1.CardType.Cat),
            ...Array(11).fill(CardType_1.CardType.Goat),
            ...Array(11).fill(CardType_1.CardType.Cheese),
            ...Array(11).fill(CardType_1.CardType.Pizza),
            ...Array(3).fill(CardType_1.CardType.Gorilla),
            ...Array(3).fill(CardType_1.CardType.Groundhog),
            ...Array(3).fill(CardType_1.CardType.Narwhal)];
        // Util.shuffleCards(originalCards)
        let players = new Array();
        for (let i = 0; i < this.numPlayers; i++) {
            players.push(new Player_1.Player());
        }
        let index = 0;
        while (originalCards.length > 0) {
            players[index % this.numPlayers].addCard(originalCards.pop());
            index++;
        }
        return players;
    }
}
let newGame = new Game(4);
console.log(newGame.players);
//# sourceMappingURL=Game.js.map