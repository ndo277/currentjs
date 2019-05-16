import Eel from "./eel";

export default class InputHandler {
  constructor(eel){

    document.addEventListener("keydown", (event) => {

      switch(event.keyCode){
        case 38:
          eel.moveUp();
          break;
        case 40:
          eel.moveDown();
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