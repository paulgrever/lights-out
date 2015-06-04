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
     var space = Game.board[$(this).data("row")][$(this).data("column")];
      $(this).removeClass(space.active.toString());

      space.active = !space.active;
      $(this).addClass(space.active.toString());
  });
});

var game = Game;
var currentGame = game.newGame();