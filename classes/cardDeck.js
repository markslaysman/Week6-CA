//Class defining a deck of playing cards

//Based on standard deck of cards we will define the suits and display value
const CARD_SUITS = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const CARD_DISPLAY = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];


//Class definition of a playing card
class Card{
    constructor(value, suit){
        //actual numerical value of card
        this.numericValue = CARD_DISPLAY.indexOf(value) + 1;
        //what someone would say the value of a card is without a suit (i.e. Ace instead of 1 and King instead of 13)
        this.displayValue = value;
        //define the suit of the card
        this.suit = suit;
        //full display description of the card (i.e. Queen of Hearts)
        this.textDisplay = `${this.displayValue} of ${this.suit}`;        
    }

    //what to display when revealing the card
    showCard(){
        return this.textDisplay;
    }
}

//Class definition of a Deck of Cards
// by using the export we can now access this class in a different file by using an import call
export default class Deck{
    constructor()
    {
        //a deck of card is simply an array of individual cards
        this.deck = [];

        //using the predefined CARD_SUITS and CARD_DISPLAY arrays loop through them to generate
        //individual playing cards and adding them to the deck
        for (let suit in CARD_SUITS) {
            for (let display in CARD_DISPLAY) {
                let card = new Card(CARD_DISPLAY[display], CARD_SUITS[suit]);
                this.deck.push(card);
            }
        }
    }

    shuffleDeck(){
        //using the Fisher-Yates shuffle method
        //This loop will run 52 times and randomly swap two values, simulating the shuffling
        //of a deck of cards.  It is recommend to run this method multiple times to get a
        //good shuffle.
        for (let i = this.deck.length -1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
}
