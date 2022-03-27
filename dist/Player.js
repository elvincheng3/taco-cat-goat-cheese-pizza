"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor() {
        this.deck = new Array();
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
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map