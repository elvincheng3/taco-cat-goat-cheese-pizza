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
}

export { Player };