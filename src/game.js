import Eel from './eel';
import Prey from './prey';
import InputHandler from './input';

export default class Game {
  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    
  }

  start() {
    this.eel = new Eel(this);
    this.prey = new Prey(this);

    let prey = [];

    for(let i = 0; i < 4; i++){
      prey.push(new Prey(this));
    }

    this.gameObjects = [
      this.eel,
      ...prey
    ];

    new InputHandler(this.eel);
  }

  update(dt) {
    this.gameObjects.forEach(obj => obj.update(dt));
  }

  draw(ctx) {
    this.gameObjects.forEach(obj => obj.draw(ctx));
  }
}