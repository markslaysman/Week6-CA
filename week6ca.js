// Main Game JS File

//import our CardDeck Class
import Deck from "./classes/cardDeck.js";


//create a new deck of cards
const cardDeck = new Deck();


//Shuffle the cards
const NUMBER_OF_SHUFFLES = 10;

for (let i = 0; i <= NUMBER_OF_SHUFFLES; i++){
    cardDeck.shuffleDeck();
}

console.log(cardDeck);
