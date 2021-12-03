// Main Game JS File

// The purpose of this program is create an automated version of the card game WAR.
// Upon running the application the following items should occur:
//   Deal an even amount of cards to each player
//   Iterate through all the cards
//   On each iteration compare the card value between the players
//   The player with this highest card value wins
//       In the event of a tie no point is given
//   Once all cards have been iterated through display the scores of each player

// General DEBUG_MODE option to console log when troubleshooting.
// Change value to true to output pre-determined lines to conole
const DEBUG_MODE = false;

// Getting some DOM objects to display data on webpage
var roundResults = document.getElementById("gameResultsByRound");
var gameResults = document.getElementById("gameFinalResults");
var gameButton = document.getElementById("runGame");

// import our CardDeck Class
import Deck from "./classes/cardDeck.js";

// import our Player Class
import Player from "./classes/player.js";

// create a new deck of cards
const cardDeck = new Deck();

// create new players
// === TO DO === prompt for Player Names
const player1 = new Player(`Doc Holliday`);
const player2 = new Player(`Johnny Chan`);

//Reset player data - specifically setting Score to 0, and cards to an empty array
function resetPlayers(){
    player1.resetGameData();
    player2.resetGameData();
}

// Shuffle the deck of cards
const NUMBER_OF_SHUFFLES = 10;

function shuffleCards(){
    for (let i = 0; i <= NUMBER_OF_SHUFFLES; i++) {
        cardDeck.shuffleDeck();
    }
}

if (DEBUG_MODE) {console.log(cardDeck)};

// For/In Loop to print out all cards in the Deck
if (DEBUG_MODE){
    for (let card in cardDeck.deck) {
        console.log(cardDeck.deck[card].showCard());
    }
}

//Deal cards to players
function dealCards() {
    //Using the cardDeck.deck.length to get the array length.  This allows for
    //using multiple decks in the future without having to hard code the number
    for (let i = 0; i < cardDeck.deck.length; i++) {
        // Checking for even/odd number card to deal to Player1 (odd) or
        // Player2(even).  We are not popping the cards out of the original deck
        // so we can debug or trouble shoot any issues later.
        if (i % 2 === 0) {
            if(DEBUG_MODE) {console.log(`Player 1 is getting ${cardDeck.deck[i].showCard()}`)};
            player1.cards.push(cardDeck.deck[i])
        } else {
            if(DEBUG_MODE) {console.log(`Player 2 is getting ${cardDeck.deck[i].showCard()}`)};
            player2.cards.push(cardDeck.deck[i])
        }
    }
}

// Compare number of cards between players, return the fewest cards
function roundLength(numP1Cards, numP2Cards) {
    if (numP1Cards === numP2Cards){
        return numP1Cards;
    } else if(numP1Cards < numP2Cards){
        return numP1Cards;
    } else {
        return numP2Cards;
    }
}

function roundWinner(currentCard){
    //If values are equal it's a tie, no winner
    if (player1.cards[currentCard].numericValue === player2.cards[currentCard].numericValue){
        ties ++;
        return (`It's a tie, no winner this round.`);
    } else if (player1.cards[currentCard].numericValue > player2.cards[currentCard].numericValue){
        player1.score ++;
        return (`${player1.name} wins the round.`);
    } else {
        player2.score ++;
        return (`${player2.name} wins the round.`);
    }
}

function playWar(){
    // Let's make sure Player1 and Player2 have the same number of cards
    // Only play a number of rounds equal to the player with the fewest cards
    let cardsToPlay = roundLength(player1.cards.length, player2.cards.length);
    if(DEBUG_MODE){console.log(`There will be ${cardsToPlay} cards played.`)};

    roundResults.innerHTML += `<p>========================================</p>`
    roundResults.innerHTML += `<pre>              Results by Round</pre>`
    roundResults.innerHTML += `<p>========================================</p>`

    for ( let i = 0; i < cardsToPlay; i++)
    {
        let roundInfo = `Round ${i + 1}:\t${player1.name} plays the ${player1.cards[i].showCard()}.
            \t${player2.name} plays the ${player2.cards[i].showCard()}.`

        let winner = roundWinner(i);

        roundInfo += `\n\t\t\t${winner}`;
        console.log(roundInfo);
        roundResults.innerHTML += `<pre> ${roundInfo} </pre>`;
    }
}

// Comapre player scores and find a winner
function determineWinner(){
    //setup text for tied rounds, if any
    let tiedRounds = '';
    
    if (ties === 0){
        // Ties = 0 nothing to do or show
    } else if (ties === 1){
        //only 1 tie, so need singular form of round
        tiedRounds = `Despite there being ${ties} tied round, `
    } else {
        //more then 1 round was a tie so now we need plural form of rounds
        tiedRounds = `Despite there being ${ties} tied rounds, `
    }

    // If the scores are equal, suggest that players play again, otherwise show game and winner information
    if (player1.score === player2.score){
        console.log(`Statistics show it was a tie.  There are no ties in WAR you should play again.`);
        gameResults.innerHTML = `<p>Statistics show it was a tie.  There are no ties in WAR you should play again.</p>`;
    } else if (player1.score > player2.score){
        console.log(`${tiedRounds}
            ${player1.name} has defeated ${player2.name} with a result of ${player1.score} to ${player2.score}.`);
        gameResults.innerHTML = `<p>${tiedRounds}
        ${player1.name} has defeated ${player2.name} with a result of ${player1.score} to ${player2.score}.<p>`;
    } else {
        console.log(`${tiedRounds} 
            ${player2.name} has defeated ${player1.name} with a result of ${player2.score} to ${player1.score}.`)
        gameResults.innerHTML = `<p>${tiedRounds}
        ${player2.name} has defeated ${player1.name} with a result of ${player2.score} to ${player1.score}.</p>`;
    }
}

// Clear the Round Output Data on HTML page, otherwise it will keep adding data when a new game is played
function clearRoundOutput(){
    roundResults.innerHTML = '';
}

// Reset Tie Counter back to 0
function resetTieCount(){
    ties = 0;
}

// Play Game
// Keep track of tied rounds
let ties = 0;

function runGame(){
    clearRoundOutput();
    resetPlayers();
    resetTieCount();
    shuffleCards();
    dealCards();
    
    if (DEBUG_MODE) {
        console.log(player1.cards);
        console.log(player2.cards);
    }
    
    playWar();
    determineWinner();
}

//Access the DOM and wait for someone to click on the Run Game button
gameButton.onclick = runGame;
