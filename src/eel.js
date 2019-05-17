export default class Eel {

  constructor(game){
    this.image = document.getElementById("eel");

    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.width = 120;
    this.height = 40;
    this.current = false;

    this.maxSpeed = 10;
    this.speed = 0;

    this.position = {
      x: this.width / 4,
      y: this.gameHeight / 2 - this.height / 2 - 50
    };
  }

  activateCurrent(){
    if (this.game.meter >= 6){
      this.current = true;
      this.game.meter = 0;
      setTimeout(() => this.current = false, 8000);
    }
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

    if (this.position.y < -30) this.position.y = -30;
    if (this.position.y + this.height + 50 > this.gameHeight){ 
      this.position.y = this.gameHeight - this.height - 50;
    }
  }
}