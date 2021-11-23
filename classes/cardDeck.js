//Class defining a deck of playing cards

const CARD_SUITS = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const CARD_DISPLAY = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

class Card{
    constructor(value, suit){
        this.numericValue = CARD_DISPLAY.indexOf(value) + 1;
        this.displayValue = value;
        this.suit = suit;
        this.textDisplay = `${this.displayValue} of ${this.suit}`;        
    }

    showCard(){
        return (`${display} of ${suit}`);
    }
}

export default class Deck{
    constructor()
    {
        this.deck = [];

        for (let suit in CARD_SUITS) {
            for (let display in CARD_DISPLAY) {
                let card = new Card(CARD_DISPLAY[display], CARD_SUITS[suit]);
                this.deck.push(card);
            }
        }
    }

    shuffleDeck(){
        //using the Fisher-Yates shuffle method
        //Deck of cards has 52 cards, loop will run 52 times to shuffle values in array
        for (let i = this.deck.length -1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
}
