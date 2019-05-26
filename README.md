# Current.js

[Live Link](https://ndo277.github.io/currentjs/)

## Background and Overview

Current.js is a simple, endless 2D scroller game. You play as an eel swimming down a current, eating smaller prey and trying to avoid larger predators or obstacles. After eating a certain amount of prey, you will gain the ability to activate your electrical current. This property makes you invunerable to predators for a limited amount of time. Game score increases the longer you survive with bonus points for prey eaten. The game ends when you are eaten by another predator or hit by an obstacle.

## Functionality and MVPs
* Player can move an avatar up and down using the up/down arrow keys.
* Forward movement simulated by obstacles and objects moving towards/past the player.
* Avatar collision with prey constitutes eating and collision with predators/obstacles constitutes being eaten/game over.
* After 5 preys eaten, player can press the 'C' key to activate invunerablity. Property will be on a set timer (10 seconds).
* Player's points is a rolling score count until game over. Bonus points added on top for type of prey eaten.

## Architecture and Technologies
* Vanilla Javascript for game logic.
* HTML5 Canvas for rendering.
* Webpack to bundle various scripts.
        
## Implementation Timeline
Day 1: 
* Review and research Javascript/Canvas
* Set up basic skeleton and webpack

Day 2:
* Avatar rendering and control functionality
* Obstacle rendering and movement simulation

Day 3:
* Collision detection
* Rolling game score
* Game over logic

Day 4:
* Eating and invulnerablity logic
* Polish game visuals

Day 5:
* Finish styling
* Deployment

BONUS: 
* Game music and SFX

