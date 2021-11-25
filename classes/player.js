// Player Class

export default class Player{
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