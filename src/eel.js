export default class Eel {

  constructor(gameWidth, gameHeight){
    this.image = document.getElementById("eel");

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.width = 120;
    this.height = 50;

    this.maxSpeed = 10;
    this.speed = 0;

    this.position = {
      x: this.width / 4,
      y: gameHeight / 2 - this.height / 2 - 50
    };
  }

  moveUp() {
    this.speed = -this.maxSpeed;
  }

  moveDown() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }


  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  update(dt) {
    
    this.position.y += this.speed;

    if (this.position.y < 0) this.position.y = 0;
    if (this.position.y + this.height + 50 > this.gameHeight) this.position.y = this.gameHeight - this.height - 50;
  }
}