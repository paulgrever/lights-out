var $ = require('jquery');
var board = require("./game_generator");

$(document).ready(function(){
  $(".button-1").on("click", function(){
    var fullBoard = board();
    fullBoard.forEach(function(num){
      divMaker(fullBoard[num].state);
    });
  });
});

var divMaker = function(i){
  console.log(i);
};
