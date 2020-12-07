var gameState = 0;
var playerCount = 0;
var database
var player , game , form
var allplayers
var car1 , car2
var cars=[]

function preload(){
  carimage1 = loadImage("images/car1.png")
  carimage2 = loadImage("images/car2.png")
  trackimage = loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight)
  database = firebase.database()

  game =  new Game()
  game.getgamestate()
  game.start()
 
}

function draw(){
if(playerCount===2){
  game.updateGameState(1)
}
if(gameState===1){
  clear()
  game.play()
}
if(gameState===2){
  game.end()
}

}

