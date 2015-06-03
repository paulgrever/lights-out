var setup = function(){
  var gameBoard = [];
  
  var startOptions = ["on", "off"];
  for (var i = 0; i < 25; i++){
    var startState = startOptions[Math.floor(Math.random() * startOptions.length)];
    gameBoard.push({
      state: startState
    });
  }
  return gameBoard;
};

console.log("game generator");
module.exports = setup;