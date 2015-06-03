var $ = require('jquery');
var Board = require('./board');

$(document).ready(function(){
  $(".button-1").on("click", function() {
    $('.gameboard div').remove();
    newGame();
  });
});
var newGame = function(){
  var board = new Board();
  var rows = board.length;
  var columns = board[0].length;
  for (var r = 0; r < rows; r++) {
    $('.gameboard').append("<div class=row id=row-"+r+"></div>");
    for(var c = 0; c < columns; c++){
      $('#row-'+r).append("<div class='col-md-1 square' id=row-"+r+"column-"+c+">"+ board[r][c].active +"</div>");
    }
  }
};
newGame();
