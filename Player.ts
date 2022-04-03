import { CardType } from "./modules/CardType";

class Player {
  deck: CardType[];
  id: number

  constructor(id: number) {
    this.deck = new Array<CardType>();
    this.id = id;
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