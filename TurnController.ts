import { CardType } from "./modules/CardType";
import { Util } from "./modules/Util";

class TurnController {
  static CHANT: Array<CardType> = [CardType.Taco, CardType.Cat, CardType.Goat, CardType.Cheese, CardType.Pizza];
  static SPECIAL: Array<CardType> = [CardType.Gorilla, CardType.Narwhal, CardType.Groundhog];
  turnNumber: number

  constructor() {
    this.turnNumber = 0;
  }

  get getTurnNumber(): number {
    return this.turnNumber;
  }

  nextTurn(): void {
    this.turnNumber++;
  }

  // returns the current chant card   
  currentChant(): CardType {
    return TurnController.CHANT[this.turnNumber % 5];
  }

  // are the cards equal?
  sameCard(card1: CardType, card2: CardType): boolean {
    return card1 == card2; 

  }

  // returns true if the card is a special card
  isSpecialCard(flippedCard: CardType): boolean {
    return Util.ormap(TurnController.SPECIAL, (card) => {
      return this.sameCard(card, flippedCard);
    })
  }

  // controls turn 
  controlTurn(flippedCard: CardType): number {
    // perform special card action
    if (this.isSpecialCard(flippedCard)) {

    }

    // perform current chant card action
    if (this.sameCard(this.currentChant(), flippedCard)) {

    }
    return -1;
  }
}

export { TurnController };