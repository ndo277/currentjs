export default class Battery {
  constructor(game){
    this.image0 = document.getElementById("battery-0");
    this.image1 = document.getElementById("battery-1");
    this.image2 = document.getElementById("battery-2");
    this.image3 = document.getElementById("battery-3");
    this.image4 = document.getElementById("battery-4");
    this.image5 = document.getElementById("battery-5");
    this.image6 = document.getElementById("battery-6");

    this.game = game;
  }

  draw(ctx){
    console.log(`meter: ${this.game.meter}`);
    
    if (this.game.meter > 6) ctx.drawImage(this.image6, 10, 40, 100, 100);

      switch (this.game.meter) {
      case 0:
        ctx.drawImage(this.image0, 10, 40, 100, 100);
        break;
      case 1:
        ctx.drawImage(this.image1, 10, 40, 100, 100);
        break;
      case 2:
        ctx.drawImage(this.image2, 10, 40, 100, 100);
        break;
      case 3:
        ctx.drawImage(this.image3, 10, 40, 100, 100);
        break;
      case 4:
        ctx.drawImage(this.image4, 10, 40, 100, 100);
        break;
      case 5:
        ctx.drawImage(this.image5, 10, 40, 100, 100);
        break;
      case 6:
        ctx.drawImage(this.image6, 10, 40, 100, 100);
        break;
    }
    
  }

  update(dt){

  }
}