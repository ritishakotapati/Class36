var database,gameState=0,playerCount;
var form,player,game;

function setup(){
    createCanvas(400,400);
    database=firebase.database()
    
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    
}

