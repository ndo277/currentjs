import Eel from './eel';
import Prey from './prey';
import InputHandler from './input';

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 700;
const GAME_HEIGHT = 500;

let eel = new Eel(GAME_WIDTH, GAME_HEIGHT);
let prey = new Prey(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(eel);

let lastTime = 0;


function gameLoop(timestamp) {
  let dt = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  eel.update(dt);
  eel.draw(ctx);

  prey.update(dt);
  prey.draw(ctx);
  

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);