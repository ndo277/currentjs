export default class Eel {

  constructor(game){
    this.image1 = document.getElementById("eel");
    this.image2 = document.getElementById("eel-super");

    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.width = 120;
    this.height = 35;
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
      document.getElementById("current").play();
      this.current = true;

      setTimeout(() => this.game.meter = 6, 1000);
      
      let decMeter = setInterval(() => {
        this.game.meter -= 1;

        if (this.game.meter === 0) {
          clearInterval(decMeter);
          this.current = false;
        }
        
      }, 1000);
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
    if (!this.current) {
      ctx.drawImage(this.image1, this.position.x, this.position.y);
    } else {
      ctx.drawImage(this.image2, this.position.x, this.position.y);
    }
  }

  update(dt) {
    
    this.position.y += this.speed;

    if (this.position.y < -30) this.position.y = -30;
    if (this.position.y + this.height + 50 > this.gameHeight){ 
      this.position.y = this.gameHeight - this.height - 50;
    }
  }
}