var $ = require('jquery');
var Board = require('./board');
var Game = require('./game_generator');

require('./stylesheet.scss');

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

    if(space.x !== 0){
      $("#row-" + (space.x - 1) + "column-" + space.y).removeClass(space.board[(space.x-1)][space.y].active.toString());
      space.board[(space.x-1)][space.y].active = !space.board[(space.x-1)][space.y].active;
      $("#row-" + (space.x - 1) + "column-" + space.y).addClass(space.board[(space.x-1)][space.y].active.toString());
    }
    if(space.x !== Game.board.rowCount()){
      $("#row-" + (space.x + 1) + "column-" + space.y).removeClass(space.board[(space.x+1)][space.y].active.toString());
      space.board[(space.x+1)][space.y].active = !space.board[(space.x+1)][space.y].active;
      $("#row-" + (space.x + 1) + "column-" + space.y).addClass(space.board[(space.x+1)][space.y].active.toString());
    }
    if (space.y !== 0) {
      $("#row-" + space.x + "column-" + (space.y - 1)).removeClass(space.board[space.x][(space.y - 1)].active.toString());
      space.board[space.x][(space.y - 1)].active = !space.board[space.x][(space.y-1)].active;
      $("#row-" + space.x + "column-" + (space.y - 1)).addClass(space.board[space.x][(space.y - 1)].active.toString());
    }
    if (space.y !== Game.board.columnCount()) {
      $("#row-" + space.x + "column-" + (space.y + 1)).removeClass(space.board[space.x][(space.y + 1)].active.toString());
      space.board[space.x][(space.y + 1)].active = !space.board[space.x][(space.y+1)].active;
      $("#row-" + space.x + "column-" + (space.y + 1)).addClass(space.board[space.x][(space.y + 1)].active.toString());
    }
    if (Game.board.spacesInactive()) {
      debugger;
      alert("Game Over!");
      $squares.off("click", renderNext);
    }
  }

  $squares.on("click", renderNext);
});

var game = Game;
var currentGame = game.newGame();
