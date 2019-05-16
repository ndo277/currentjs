export default class Prey {

  constructor(gameWidth, gameHeight) {
    this.image = document.getElementById("tiny");

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    
    this.position = {
      x: this.gameWidth, 
      y: 100
    };

    this.speed = {x: -2};
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  update(dt) {
    this.position.x += this.speed.x;
  }
}