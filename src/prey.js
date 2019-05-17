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

    this.speed = {x: -6.5};
  }

  draw(ctx) {
    ctx.drawImage(this.image, 
                  this.position.x, 
                  this.position.y,
                  this.size,
                  this.size);
  }

  update(dt) {
    this.position.x += this.speed.x;

    if (this.position.x + this.size < 0){
      this.position.x = this.gameWidth;
      this.position.y = this.gameHeight - Math.random() * this.gameHeight - 85;
    }

    // collision with eel
    let headOfPrey = {xStart: this.position.x,
                      xEnd: this.position.x + this.size,
                      yStart: this.position.y,
                      yEnd: this.position.y + this.size
                     };
    let mouthOfEel = {xStart: this.game.eel.position.x + 80,
                      xEnd: this.game.eel.position.x + this.game.eel.width - 50, 
                      yStart: this.game.eel.position.y + 80,
                      yEnd: this.game.eel.position.y + this.game.eel.height
                     };

    if (mouthOfEel.xStart < headOfPrey.xEnd &&
        mouthOfEel.xEnd > headOfPrey.xStart &&
        mouthOfEel.yStart < headOfPrey.yEnd &&
        mouthOfEel.yEnd > headOfPrey.yStart) {
      
        this.position.x = this.gameWidth;
        this.position.y = this.gameHeight - Math.random() * this.gameHeight - 85;

    }
  }
}