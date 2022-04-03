"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnController = void 0;
const CardType_1 = require("./modules/CardType");
const Util_1 = require("./modules/Util");
class TurnController {
    constructor(io, numPlayers) {
        this.slapOrder = [];
        this.turnNumber = 0;
        this.waitingForSlap = false;
        this.numPlayers = numPlayers;
        io.on("slap", (id) => {
            if (this.waitingForSlap && !this.slapOrder.includes(id)) {
                this.slapOrder.push(id);
                if (this.slapOrder.length >= this.numPlayers) {
                    this.waitingForSlap = false;
                }
            }
        });
    }
    get getTurnNumber() {
        return this.turnNumber;
    }
    nextTurn() {
        this.turnNumber++;
    }
    // returns the current chant card   
    currentChant() {
        return TurnController.CHANT[this.turnNumber % 5];
    }
    // are the cards equal?
    sameCard(card1, card2) {
        return card1 == card2;
    }
    // returns true if the card is a special card
    isSpecialCard(flippedCard) {
        return Util_1.Util.ormap(TurnController.SPECIAL, (card) => {
            return this.sameCard(card, flippedCard);
        });
    }
    // controls turn 
    controlTurn(flippedCard) {
        // perform special card action
        if (this.isSpecialCard(flippedCard)) {
        }
        // perform current chant card action
        if (this.sameCard(this.currentChant(), flippedCard)) {
            this.waitingForSlap = true;
            // wait for all slaps
            Util_1.Util.sleepUntil(() => { return !this.waitingForSlap; })
                .then(() => {
                let lastPlayer = this.slapOrder.pop();
                this.slapOrder = [];
                return lastPlayer;
            });
        }
        return -1;
    }
}
exports.TurnController = TurnController;
TurnController.CHANT = [CardType_1.CardType.Taco, CardType_1.CardType.Cat, CardType_1.CardType.Goat, CardType_1.CardType.Cheese, CardType_1.CardType.Pizza];
TurnController.SPECIAL = [CardType_1.CardType.Gorilla, CardType_1.CardType.Narwhal, CardType_1.CardType.Groundhog];
//# sourceMappingURL=TurnController.js.map