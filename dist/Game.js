"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CardType_1 = require("./modules/CardType");
const Player_1 = require("./Player");
const Util_1 = require("./modules/Util");
const TurnController_1 = require("./TurnController");
const GameServer_1 = require("./GameServer");
class Game {
    constructor(numPlayers, io) {
        this.numPlayers = numPlayers;
        this.centerDeck = [];
        this.players = this.initializePlayers();
        this.turnController = new TurnController_1.TurnController(io, this.numPlayers);
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
        // shuffle the original cards
        Util_1.Util.shuffle(originalCards);
        // create the players
        let players = new Array();
        for (let i = 0; i < this.numPlayers; i++) {
            players.push(new Player_1.Player(i));
        }
        // deal the cards to the players
        let index = 0;
        while (originalCards.length > 0) {
            players[index % this.numPlayers].addCard(originalCards.pop());
            index++;
        }
        return players;
    }
    // starts the game 
    startGame() {
        while (!this.hasWinner()) {
            // current player flips their top card
            let newTopCard = this.players[this.turnController.getTurnNumber % this.numPlayers].removeCard();
            // add the new top card to the deck
            this.centerDeck.push(newTopCard);
            // if the card matches the current chant, then check for actions, incl. special
            this.turnController.controlTurn(newTopCard);
            // number
            // manage deck after turn, (give shuffled center deck to loser, clear center deck)
            // move on to the next player
            this.turnController.nextTurn();
        }
        // declare winner
    }
    // is there a winner?
    hasWinner() {
        return Util_1.Util.ormap(this.players, (player) => {
            return player.hasWon();
        });
    }
}
let server = new GameServer_1.GameServer();
let newGame = new Game(4, server.io);
// console.log(newGame.players);
console.log(server.newRoom());
//# sourceMappingURL=Game.js.map