var gameBoard = [];
var Space = function(state) {
  this.state = state;
};

var startOptions = ["on", "off"];

var setup = function(){
  for (var i = 0; i < 25; i++){
    var startState = startOptions[Math.floor(Math.random() * startOptions.length)];
    var space = new Space(startState);
    gameBoard.push(space);
  }
};

setup();
module.exports = gameBoard;
module.exports = startOptions;
module.exports = Space;
module.exports = setup;