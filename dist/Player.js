"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(id) {
        this.deck = new Array();
        this.id = id;
    }
    addCard(card) {
        this.deck.push(card);
    }
    addCards(cards) {
        this.deck.concat(cards);
    }
    removeCard() {
        return this.deck.pop();
    }
    hasWon() {
        return this.deck.length == 0;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map