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
    this.size = 100;
  }

  draw(ctx){
    if (this.game.meter > 6) ctx.drawImage(this.image6, -15, -10, this.size, this.size);

      switch (this.game.meter) {
      case 0:
        ctx.drawImage(this.image0, -15, -10, this.size, this.size);
        break;
      case 1:
        ctx.drawImage(this.image1, -15, -10, this.size, this.size);
        break;
      case 2:
        ctx.drawImage(this.image2, -15, -10, this.size, this.size);
        break;
      case 3:
        ctx.drawImage(this.image3, -15, -10, this.size, this.size);
        break;
      case 4:
        ctx.drawImage(this.image4, -15, -10, this.size, this.size);
        break;
      case 5:
        ctx.drawImage(this.image5, -15, -10, this.size, this.size);
        break;
      case 6:
        ctx.drawImage(this.image6, -15, -10, this.size, this.size);
        break;
    }
    
  }

  update(dt){

  }
}