import { CardType } from "./modules/CardType";
import { Player } from "./Player";
import { Util } from "./modules/Util";
import { TurnController } from "./TurnController";
import WebSocket, { WebSocketServer } from 'ws';
import { Server } from "socket.io";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

class Game {
  numPlayers: number
  centerDeck: CardType[]
  players: Player[]
  io: Server
  turnController: TurnController

  constructor(numPlayers: number) {
    this.numPlayers = numPlayers;
    this.centerDeck = [];
    this.players = this.initializePlayers();
    this.io = new Server(3000);
    this.turnController = new TurnController(this.io, this.numPlayers);
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
    Util.shuffle(originalCards);

    // create the players
    let players = new Array<Player>();
    for (let i = 0; i < this.numPlayers; i++) {
      players.push(new Player(i));
    }

    // deal the cards to the players
    let index: number = 0;
    while (originalCards.length > 0) {
      players[index % this.numPlayers].addCard(originalCards.pop());
      index++;
    }
    return players;
  }

  // starts the game 
  startGame(): void {
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
  hasWinner(): boolean {
    return Util.ormap(this.players, (player) => {
      return player.hasWon();
    });
  }
}

let newGame = new Game(4);
console.log(newGame.players);

