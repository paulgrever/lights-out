var $ = require('jquery');
var Board = require('./board');
var Game = require('./game_generator');

require('./stylesheet.scss');

$(document).ready(function(){
  $(".button-1").on("click", function() {
    $('.gameboard div').remove();
    Game.newGame();
  });
  $(".square").on("click", function () {
    var $id = $(this).attr("id");
    var row = $(this).data("row");
    var column = $(this).data("column");
    var space = Game.board[row][column];
    $(this).removeClass(space.active.toString());
    space.active = !space.active;
    $(this).addClass(space.active.toString());
    if(space.x !== 0){
      $("#row-" + (space.x - 1) + "column-" + space.y).removeClass(space.board[(space.x-1)][space.y].active.toString());
      space.board[(space.x-1)][space.y].active = !space.board[(space.x-1)][space.y].active;
      $("#row-" + (space.x - 1) + "column-" + space.y).addClass(space.board[(space.x-1)][space.y].active.toString());
    }
    if(space.x !== rowCount){
      $("#row-" + (space.x + 1) + "column-" + space.y).removeClass(space.board[(space.x+1)][space.y].active.toString());
      space.board[(space.x+1)][space.y].active = !space.board[(space.x+1)][space.y].active;
      $("#row-" + (space.x + 1) + "column-" + space.y).addClass(space.board[(space.x+1)][space.y].active.toString());
    }
    if (space.y !== 0) {
      $("#row-" + space.x + "column-" + (space.y - 1)).removeClass(space.board[space.x][(space.y - 1)].active.toString());
      space.board[space.x][(space.y - 1)].active = !space.board[space.x][(space.y-1)].active;
      $("#row-" + space.x + "column-" + (space.y - 1)).addClass(space.board[space.x][(space.y - 1)].active.toString());
    }
    if (space.y !== 0) {
      $("#row-" + space.x + "column-" + (space.y + 1)).removeClass(space.board[space.x][(space.y + 1)].active.toString());
      space.board[space.x][(space.y + 1)].active = !space.board[space.x][(space.y+1)].active;
      $("#row-" + space.x + "column-" + (space.y + 1)).addClass(space.board[space.x][(space.y + 1)].active.toString());
    }
  });
});

var rowCount = Game.board.length;
var columnCount = Game.board[0].length;

var neighborUpdate = function(row, column){
  var neighborSpace =[];
  var rowCount = Game.board.length;
  var columnCount = Game.board[0].length;
  // north
  if (row !==0){
    neighborSpace.push(Game.board[row - 1][column]);
  }
  // west
  if (column !==0 ){
    neighborSpace.push(Game.board[row][column - 1]);
  }
  return neighborSpace;

  // if((row == 0) && (column === 0)){
  //   var south = Game.board[row + 1][column];
  //   var east = Game.board[row][column + 1];
  //   neighborSpace.push(south);
  //   neighborSpace.push(east);
  // } else if (row == 0)  {
  //   var south = Game.board[row + 1][column];
  //   var east = Game.board[row][column + 1];
  //   var west = Game.board[row][column - 1];

  // }
  // var north = Game.board[row - 1][column];
  // var south = Game.board[row + 1][column];
  // var east = Game.board[row][column + 1];
  // var west = Game.board[row][column - 1];
  // console.log(north.active);
  // console.log(east.active);
  // console.log(south.active);
  // console.log(west.active);
};

var game = Game;
var currentGame = game.newGame();