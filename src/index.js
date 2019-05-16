import Game from "./game";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 700;
const GAME_HEIGHT = 500;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();


let lastTime = 0;


function gameLoop(timestamp) {
  let dt = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(dt);
  game.draw(ctx);
  

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);