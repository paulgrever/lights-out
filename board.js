module.exports = function (rows, columns) {
  rows = rows || 5;
  columns = columns || 5;

  var board = [];

  for (var r = 0; r < rows; r++) {
    var row = [];
    for (var c = 0; c < columns; c++) {
      row.push({ active: false, board: board, x: r, y: c });
    }
    board.push(row);
  }

  return board;
};