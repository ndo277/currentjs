# Current.js

[Live Link](https://ndo277.github.io/currentjs/)

## Background and Overview
Current.js is an endless 2D scroller game that gradually scales in difficulty to match the skill of the player. The game is designed to be easy to pick up for beginners with its simple controls, and hard to put down for experienced players who seek a challenge. You play as an eel swimming down a current, maneuvering to eat smaller prey and to avoid larger predators. After eating a certain amount of prey, you will gain the ability to activate your electrical current. This property makes you invunerable to predators for a limited amount of time. This will come in handy, because the longer you play, the faster the current becomes!

![](assets/images/game.gif)

## Architecture and Technologies
Current.js is built with vanilla JavaScript to handle processing of game logic, and HTML5 canvas to handle rendering of game objects. Webpack is used to bundle and serve up various scripts.
        
## Code Highlights

To convey the sense of the eel gradually charging down as it releases electricity, an in-game battery icon is tied to the internal decrement of a "meter" property. The logic is stored inside the function that handles initial activation of the current property: 

```javascript
// src/eel.js

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
```

After player activates current, a setTimeout function is used to set the meter to a fixed amount after 1 second. Since the meter could incease in size unboundedly, before starting the charging down phase, the meter needs to be set to a fixed amount. During the charging down phase, a setInterval function is used to gradually decrement the meter every second, until the meter reaches 0 and the interval is cleared. 
