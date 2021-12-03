// Setting up Unit Tests for War game
var expect = chai.expect;

describe('Reset Tie Count', function() {
    describe('#resetTieCount', function() {
        it('should reset the tie counter to 0', function(){
            let x = resetTieCount();
            console.log(x);
            expect(x).to.equal(0);
        });
    });
});

describe('Creating a Player', function() {
    describe('#creatingAPlayer', function() {
        it('should create a new player from the Player class', function(){
            let p = new Player("TestPlayer1");
            expect(p).to.be.an.instanceof(Player);
        });
    });
});
