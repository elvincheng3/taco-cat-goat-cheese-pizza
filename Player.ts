import { CardType } from "./modules/CardType";

class Player {
  deck: CardType[];

  constructor() {
    this.deck = new Array<CardType>();
  }

  addCard(card: CardType): void {
    this.deck.push(card);
  }

  addCards(cards: CardType[]): void {
    this.deck.concat(cards);
  }

  removeCard(): CardType {
    return this.deck.pop();
  }

  hasWon(): boolean {
    return this.deck.length == 0;
  }
}

export { Player };