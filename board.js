var boardDifficulties = require("./board_difficulties.js");

function Board( rows, columns, boardTemplate) {
  boardTemplate = boardTemplate || [
                                     {r: 1, c: 1},
                                     {r: 1, c: 2},
                                     {r: 2, c: 0},
                                     {r: 2, c: 1},
                                     {r: 2, c: 2},
                                     {r: 2, c: 3},
                                     {r: 3, c: 0},
                                     {r: 3, c: 1},
                                     {r: 3, c: 2},
                                     {r: 3, c: 3},
                                     {r: 4, c: 1},
                                     {r: 4, c: 2}
                                   ]
  rows = rows || 5;
  columns = columns || 5;
  var startOptions = [true,  false];

  this.board = [];

  for (var r = 0; r < rows; r++) {
    var row = [];
    for (var c = 0; c < columns; c++) {
      var space = {
        active: false,
        board: this.board,
        x: r,
        y: c
      };
      // if (boardTemplate && boardTemplate[r][c]) { space.active = true };
      row.push(space);
    }
    this.board.push(row);
  }
  for (var s = 0; s < boardTemplate.length; s++) {
    var bt = boardTemplate[s];
    this.board[bt["r"]][bt["c"]].active = true;
  }
}

Board.prototype.rowCount = function() {
  return this.board.length;
};

Board.prototype.columnCount = function() {
  return this.board[0].length;
};

Board.prototype.getLength = function() {
  return this.board.length
};

Board.prototype.spacesInactive = function() {
  for ( var r = 0; r < this.board.length; r++) {
    var row = this.board[r];
    for ( var c = 0; c < row.length; c++) {
      var space = row[c];
      if (space.active) {
        return false
      }
    };
  };
  return true
}

module.exports = Board
