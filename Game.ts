class Game {
  numPlayers: number
  centerDeck: Array<CardTypes>
  decks: Array<Array<CardTypes>>

  Game(numPlayers: number) {
    this.numPlayers = numPlayers;
    this.centerDeck = [];

    // create empty decks for each player
    for (let i = 0; i < this.numPlayers; i++) {
      this.decks.push([]);
    }
    
    // original cards in a deck
    let originalCards = [...Array<CardTypes>(9).fill(CardTypes.Taco), 
                         ...Array<CardTypes>(9).fill(CardTypes.Cat),
                         ...Array<CardTypes>(9).fill(CardTypes.Goat),
                         ...Array<CardTypes>(9).fill(CardTypes.Cheese),
                         ...Array<CardTypes>(9).fill(CardTypes.Pizza),
                         ...Array<CardTypes>(3).fill(CardTypes.Gorilla),
                         ...Array<CardTypes>(3).fill(CardTypes.Groundhog),
                         ...Array<CardTypes>(3).fill(CardTypes.Narwhal)];
    for (var card of originalCards) {
      this.decks[Math.ceil(Math.random() * numPlayers)].push(card);
    }
  }
}