function Board( rows, columns) {
  rows = rows || 5;
  columns = columns || 5;
  var startOptions = [true,  false];

  this.board = [];

  for (var r = 0; r < rows; r++) {
    var row = [];
    for (var c = 0; c < columns; c++) {
      /*
      var space = {
        active: startOptions[Math.floor(Math.random() * startOptions.length)],
        board: this.board,
        x: r,
        y: c
      }
      */
      var space = {
				active: false,
				board: this.board,
				x: r,
				y: c
			};
      row.push(space);
      // row.push({ active: false, board: this.board, x: r, y: c });
    }
    this.board.push(row);
  }

	this.board[0][1].active = true;
	this.board[1][0].active = true;
	this.board[1][1].active = true;
	this.board[1][2].active = true;
	this.board[2][1].active = true;
}

Board.prototype.rowCount = function() {
  return this.board.length - 1
}

Board.prototype.columnCount = function() {
  return this.board[0].length - 1
}

Board.prototype.getLength = function() {
  return this.board.length
}

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
