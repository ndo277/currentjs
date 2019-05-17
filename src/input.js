export default class InputHandler {
  constructor(eel, game){

    document.addEventListener("keydown", (event) => {

      switch(event.keyCode){
        case 38:
          eel.moveUp();
          break;
        case 40:
          eel.moveDown();
          break;
        case 80:
          game.togglePause();
          break; 
        case 32:
          game.start();
          break;
      }
    });

    document.addEventListener("keyup", (event) => {

      switch(event.keyCode){
        case 38:
          if (eel.speed < 0) eel.stop();
          break;
        case 40:
          if (eel.speed > 0) eel.stop();
          break;
      }
    });
  }


}