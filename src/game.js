import Eel from './eel';
import Prey from './prey';
import Predator from './predator';
import InputHandler from './input';
import Battery from './battery';

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
    this.battery = new Battery(this);
    this.lives = 1;
    this.score = 0;
    this.meter = 0;
    this.music = document.getElementById("music");

    new InputHandler(this.eel, this);
  }

  start() {
    this.music.play();

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
      this.battery,
      ...prey,
      ...predators
    ];

    this.gamestate = GAMESTATE.RUNNING;
  }

  reset() {
    if (this.gamestate === GAMESTATE.GAMEOVER){
      location.reload();
    }
  }

  update(dt) {
    if (this.gamestate === GAMESTATE.RUNNING){
      this.score += 1;
    }

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

    // SCORE
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "start";
    ctx.fillText(this.score, 10, 20);
    
    // PAUSE
    if (this.gamestate === GAMESTATE.PAUSED){
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("PAUSED", this.gameWidth / 2, this.gameHeight / 2);

    }


    // START MENU
    if (this.gamestate === GAMESTATE.MENU){
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Eat smaller prey and avoid larger predators!", this.gameWidth / 2, this.gameHeight / 2 - 75);
      ctx.fillText("Use UP and DOWN keys to move", this.gameWidth / 2, this.gameHeight / 2 - 35);
      ctx.fillText("Press C to activate your electric current when fully charged!", this.gameWidth / 2, this.gameHeight / 2);
      ctx.fillText("Press P to pause game", this.gameWidth / 2, this.gameHeight / 2 + 35);
      ctx.fillText("Press SPACEBAR to start game", this.gameWidth / 2, this.gameHeight / 2 + 75);

    }

    // GAME OVER
    if (this.gamestate === GAMESTATE.GAMEOVER){
      this.music.pause();
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fill();

      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2 - 20);
      ctx.fillText(`SCORE ${this.score}`, this.gameWidth / 2, this.gameHeight / 2 + 10);
      ctx.textAlign = "start";
      ctx.fillText("Press R to reset", 10, 20);

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