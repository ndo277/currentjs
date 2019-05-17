export function detectCollision (eel, fish) {
  let fishDimensions = {
    xStart: fish.position.x,
    xEnd: fish.position.x + fish.size,
    yStart: fish.position.y,
    yEnd: fish.position.y + fish.size
  };
  let mouthOfEel = {
    xStart: eel.position.x + 80,
    xEnd: eel.position.x + eel.width - 50,
    yStart: eel.position.y + 80,
    yEnd: eel.position.y + eel.height
  };

  if (mouthOfEel.xStart < fishDimensions.xEnd &&
    mouthOfEel.xEnd > fishDimensions.xStart &&
    mouthOfEel.yStart < fishDimensions.yEnd &&
    mouthOfEel.yEnd > fishDimensions.yStart){
      return true;
    } else {
      return false;
    }
}