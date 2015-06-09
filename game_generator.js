var $ = require('jquery');
var Board = require('./board');

module.exports = {
  board: new Board(),
  newGame:  function(){
    // var board = new Board();
    var board = this.board;
    var rows = board.rowCount();
    var columns = board.columnCount();
    for (var r = 0; r < rows; r++) {
      $('.gameboard').append("<div class=row id=row-"+r+"></div>");
      for(var c = 0; c < columns; c++){
        $('#row-'+r).append("<div class=' square "+
                             board.board[r][c].active +
                             "' data-row=" + r + " data-column=" + c +
                             " id=row-"+r+"column-"+
                             c+">"+ board.board[r][c].x +"," + board.board[r][c].y +
                             "</div>");
      }
    }
  }
};
