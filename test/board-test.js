var expect = require('chai').expect;
var Board = require('../board');

describe('board', function () {

  it('should default to five rows', function () {
    var board = new Board();
    expect(board).to.have.length(5);
  });

  it('should default to five columns', function () {
    var board = new Board();
    expect(board[0]).to.have.length(5);
  });

  it('should contain objects with a status', function () {
    var board = new Board();
    expect(board[0][0].active).to.not.be.undefined;
    expect(board[0][0].active).to.not.be.true;
  });

  it('should have spaces that can access the board', function () {
    var board = new Board();
    expect(board[0][0].board).to.equal(board);
  });

  it('should have a x property with the correct row', function () {
    var board = new Board();
    expect(board[0][0].x).to.equal(0);
    expect(board[4][0].x).to.equal(4);
  });

  it('should have a y property with the correct column', function () {
    var board = new Board();
    expect(board[0][0].y).to.equal(0);
    expect(board[4][4].y).to.equal(4);
  });

});