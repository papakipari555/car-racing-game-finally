class Game{
    constructor(){

    }
    getgamestate(){
        var gamestateref = database.ref("gameState")
         gamestateref.on("value" , function(data){
          gameState = data.val();
         })
    }
    updateGameState(state){
        var stateref = database.ref("/")
        stateref.update({
            gameState : state
        })
    }
     start(){
         if (gameState === 0 ){
             player = new Player()
             player.getplayerCount()
             form = new Form()
             form.display();
             console.log("something went wrong");
         }

         car1 = createSprite(100,200)
         car1.addImage(carimage1)
         car2 = createSprite(300,200)
         car2.addImage(carimage2)
         cars = [car1 , car2]
     }
     play(){
         form.hide();
         text("game started" , 120,100)
         player.getcarsatend()
         Player.getallplayerinfo()
         if (allplayers !== undefined){
             image(trackimage , 0,-displayHeight*4 , displayWidth , displayHeight*5)
            var  positiony = 120;
            var positionx = 400;
            var index = 0;

             for (var plr in allplayers){   

                 positiony = displayHeight-allplayers[plr].distance
                  cars[index].x=positionx
                  cars[index].y=positiony
                  positionx=positionx+200
                  
                  if(plr==="player"+player.index){
                      cars[index].shapeColor="red"
                      camera.position.x=displayWidth/2
                      camera.position.y=cars[index].y
                      fill("red")
                      ellipse(cars[index].x , cars[index].y , 60,60)
                  }
                     else{
                         cars[index].shapeColor="black"
                     } 
                     index=index+1

            
                     
                 /*if(plr==="player"+player.index){ 
                     fill("red")

                 }
                 else{
                     fill("black")
                 }
                 text(allplayers[plr].playername + ":" + allplayers[plr].distance, 100 ,positiony
                  )
                  positiony=positiony+20*/
             }
              
         }
         if(keyIsDown(UP_ARROW) && player.index !==null){
             player.distance=player.distance+20
             player.updateplayerinfo()

         }
         if(player.distance===3860){
             gameState=2;
             player.rank = player.rank+1
             Player.updatecarsatend(player.rank)
         }
         drawSprites();
     }
      end(){
          console.log("GAME OVER")
          game.updateGameState(2)
          console.log(player.rank)
          console.log(player.name)
      }
}




