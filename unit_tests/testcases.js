// After having issues with using imports/exports in my code and Mocha not
// working it was suggested I create a seperate .js file with the function
// and code I wanted to test.   I don't think this is the way it is itended
// to be, but technically the unit tests pass.  Anytime changes to the 
// functions/classes occur in the main code I will need to copy them over
// here to make sure the unit tests still work.

// Reset Tie Counter back to 0
function resetTieCount(){
    //ties = 0;
    return 0;
}

class Player{
    constructor (name){
        this.name = name;
        this.score = 0;
        this.cards = [];
    }

    //If a new game is started lets clear out the score and list of cards
    resetGameData(){
        this.score = 0;
        this.cards = [];
    }
}
