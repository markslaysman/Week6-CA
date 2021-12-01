// import our Player Class
//import Player from "../classes/player.js";
//import resetTieCount from "../week6ca.js"


// Setting up Unit Tests for War game
var expect = chai.expect;


describe('Reset Tie Count', function() {
    describe('#resetTieCount', function() {
        it('should reset the tie counter to 0', function(){
            //create variable to hold value to test
            //let x = 0;
            let x = resetTieCount();
            expect(x).to.equal(0);
        });
    });
});

describe('Creating a Player', function() {
    describe('#creatingAPlayer', function() {
        it('should create a new player from the Player class', function(){
            
            let p = new Player("TestPlayer1");
            
            // Whats the difference in the two lines below???
            expect(p).to.be.an.instanceof(Player);
            //expect(p).to.be.instanceof(Player);
        });
    });
});
