var $ = require('jquery');
var Board = require('./board');
var Game = require('./game_generator');

require('./stylesheet.scss');

function flipSpace(offsetX, offsetY, space) {
  var neighbor = space.board[space.x + offsetX] && space.board[space.x + offsetX][space.y + offsetY];
  if (neighbor) {
    $("#row-" + (neighbor.x) + "column-" + neighbor.y).removeClass(neighbor.board[neighbor.x][neighbor.y].active.toString());
    neighbor.active = !neighbor.active;
    $("#row-" + (neighbor.x) + "column-" + neighbor.y).addClass(neighbor.board[(neighbor.x)][neighbor.y].active.toString());
  }
}

var flipNorth = flipSpace.bind(null, 0, -1);
var flipEast = flipSpace.bind(null, 1, 0);
var flipSouth = flipSpace.bind(null, 0, 1);
var flipWest = flipSpace.bind(null, -1, 0);


$(document).ready(function(){
  $(".button-1").on("click", function() {
    $('.gameboard div').remove();
    Game.newGame();
  });

  var $squares = $(".square");

  function renderNext () {
    var $id = $(this).attr("id");
    var row = $(this).data("row");
    var column = $(this).data("column");
    var space = Game.board.board[row][column];
    $(this).removeClass(space.active.toString());
    space.active = !space.active;
    $(this).addClass(space.active.toString());

    flipNorth(space);
    flipEast(space);
    flipSouth(space);
    flipWest(space);

    if (Game.board.spacesInactive()) {
      alert("Game Over!");
      $squares.off("click", renderNext);
    }

    console.table(space.board);
  }

  $squares.on("click", renderNext);
});

var game = Game;
var currentGame = game.newGame();
