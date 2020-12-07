class Form{
    constructor(){
         this.title = createElement("h1")
         this.inputbox = createInput()
         this.button = createButton("start")
         this.reset = createButton("reset database")
         this.greeting = createElement("h4")
    }
display(){
this.title.html("car racing game")
this.title.position(130 , 0)

this.inputbox.position(130 , 160)
this.button.position(250 , 200)
this.reset.position(displayWidth-100 , 20)

this.reset.mousePressed(()=>{
     game.updateGameState(0)
     player.update(0)
})

this.button.mousePressed(()=>{
     this.inputbox.hide()
     this.button.hide()

      player.name = this.inputbox.value()
     
     playerCount = playerCount+1
     player.index=playerCount
     player.updateplayerinfo()

     player.update(playerCount)

     this.greeting.html("welcome" + player.name)
     this.greeting.position(130,160)
})

 
}
   hide(){
       this.inputbox.hide();
       this.button.hide();
       this.greeting.hide();
        this.title.hide();


   }
}