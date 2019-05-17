import Eel from './eel';
import Prey from './prey';
import Predator from './predator';
import InputHandler from './input';

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

export default class Game {
  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    
    this.gamestate = GAMESTATE.MENU;
    this.gameObjects = [];
    this.eel = new Eel(this);
    this.lives = 1;

    new InputHandler(this.eel, this);
  }

  start() {
    if (this.gamestate !== GAMESTATE.MENU) {
          return;
        }

    let prey = [];
    let predators = [];

    for(let i = 0; i < 4; i++){
      prey.push(new Prey(this));
      predators.push(new Predator(this));
    }

    this.gameObjects = [
      this.eel,
      ...prey,
      ...predators
    ];

    this.gamestate = GAMESTATE.RUNNING;
  }

  update(dt) {
    if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;

    if (this.gamestate === GAMESTATE.PAUSED || 
        this.gamestate === GAMESTATE.MENU ||
        this.gamestate === GAMESTATE.GAMEOVER) {
          return;
        }

    this.gameObjects.forEach(obj => obj.update(dt));
  }

  draw(ctx) {
    this.gameObjects.forEach(obj => obj.draw(ctx));

    if (this.gamestate === GAMESTATE.PAUSED){
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("PAUSED", this.gameWidth / 2, this.gameHeight / 2);

    }

    if (this.gamestate === GAMESTATE.MENU){
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Press SPACEBAR to start game", this.gameWidth / 2, this.gameHeight / 2);

    }

    if (this.gamestate === GAMESTATE.GAMEOVER){
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fill();

      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);

    }
  }

  togglePause(){
    if (this.gamestate == GAMESTATE.PAUSED){
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
}