import { CardType } from "./modules/CardType";
import { Player } from "./Player";
import { Util } from "./modules/Util";

class Game {
  numPlayers: number
  centerDeck: CardType[]
  players: Player[]

  constructor(numPlayers: number) {
    this.numPlayers = numPlayers;
    this.centerDeck = [];
    this.players = this.initializePlayers();
  }

  // initializes the players, distributing the cards evenly 
  initializePlayers(): Player[] {
    let originalCards = 
    [...Array<CardType>(11).fill(CardType.Taco), 
      ...Array<CardType>(11).fill(CardType.Cat),
      ...Array<CardType>(11).fill(CardType.Goat),
      ...Array<CardType>(11).fill(CardType.Cheese),
      ...Array<CardType>(11).fill(CardType.Pizza),
      ...Array<CardType>(3).fill(CardType.Gorilla),
      ...Array<CardType>(3).fill(CardType.Groundhog),
      ...Array<CardType>(3).fill(CardType.Narwhal)];

    // shuffle the original cards
    Util.shuffleCards(originalCards)

    // create the players
    let players = new Array<Player>();
    for (let i = 0; i < this.numPlayers; i++) {
      players.push(new Player());
    }

    // deal the cards to the players
    let index: number = 0;
    while (originalCards.length > 0) {
      players[index % this.numPlayers].addCard(originalCards.pop());
      index++;
    }
    return players;
  }
}

let newGame = new Game(4);
console.log(newGame.players);