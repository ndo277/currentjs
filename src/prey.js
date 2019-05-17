import {detectCollision} from './collision';

export default class Prey {

  constructor(game) {
    this.image = document.getElementById("tiny");
    this.size = 100;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    
    this.position = {
      x: game.gameWidth + Math.random() * 200, 
      y: game.gameHeight - Math.random() * game.gameHeight - 85
    };

    this.speed = {x: -8};
  }

  draw(ctx) {
    ctx.drawImage(this.image, 
                  this.position.x, 
                  this.position.y,
                  this.size,
                  this.size);
  }

  respawn() {
    this.position.x = this.gameWidth + Math.random() * 200;
    this.position.y = this.gameHeight - Math.random() * this.gameHeight - 85;
  }

  update(dt) {
    this.position.x += this.speed.x;

    if (this.position.x + this.size < 0){
      this.respawn();
    }

    if (detectCollision(this.game.eel, this)){
      this.respawn();
    }
  }
}