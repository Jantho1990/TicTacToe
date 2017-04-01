var ticTacToe = function(){
  var my = {};

  my.grid = [];
  my.gameOver = false;
  my.playerTurn = 1;

  my.makeGrid = function(els, rows, cols){
    // Make sure we have the right number of elements.
    if(els.length !== (rows * cols)){
      console.log('Wrong number of elements.', els.length);
      return false;
    }
    // Assign elements to rows and columns.
    var ct = 0;
    for(var i = 0; i < rows; i++){
      my.grid[i] = [];
      for(var j = 0; j < cols; j++){
        my.grid[i][j] = {
          el: els[ct++]
        };
      }
    }
  };

  my.makeX = function(square){
    square.el.classList.remove('o');
    square.el.classList.add('x');
  };

  my.makeO = function(square){
    square.el.classList.remove('x');
    square.el.classList.add('o');
  };

  my.makeEmpty = function(square){
    square.el.classList.remove('x');
    square.el.classList.remove('o');
  };

  var init = function(){

  };

  return my;
}();
