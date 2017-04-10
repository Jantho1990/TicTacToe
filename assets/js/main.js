var ticTacToe = function(){
  var my = {};

  my.grid = [];
  my.gameOver = false;
  my.playerTurn = 1;

  my.makeX = function(square){
    square.content = 'x';
    square.el.classList.remove('o');
    square.el.classList.add('x');
  };

  my.makeO = function(square){
    square.content = 'o';
    square.el.classList.remove('x');
    square.el.classList.add('o');
  };

  my.makeEmpty = function(square){
    square.content = null;
    square.el.classList.remove('x');
    square.el.classList.remove('o');
  };

  my.isGameOver = function(){

  }

  var init = function(){

  };

  return my;
}();
