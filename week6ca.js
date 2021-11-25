// Main Game JS File

//The purpose of this program is create an automated version of the card game WAR.
//Upon running the application the following items should occur:
//  Deal an even amount of cards to each player
//  Iterate through all the cards
//  On each iteration compare the card value between the players
//  The player with this highest card value wins
//      In the event of a tie no point is given
//  Once call cards have been iterated through display the scores of each player

//import our CardDeck Class
import Deck from "./classes/cardDeck.js";

//import our Player Class
import Player from "./classes/player.js";

//create a new deck of cards
const cardDeck = new Deck();

//create new players
const player1 = new Player(`Doc Holliday`);
const player2 = new Player(`Johnny Chan`);

//Shuffle the deck of cards
const NUMBER_OF_SHUFFLES = 10;
for (let i = 0; i <= NUMBER_OF_SHUFFLES; i++) {
    cardDeck.shuffleDeck();
}

function dealCards() {
    for (let i = 0; i < cardDeck.deck.length; i++) {
        if (i % 2 === 0) {
            player1.cards.push(cardDeck.deck[i])
        } else {
            player1.cards.push(cardDeck.deck[i])
        }
    }
}




console.log(cardDeck);

// For/In Loop to print out all cards
for (let card in cardDeck.deck) {
    console.log(cardDeck.deck[card].showCard());
}

