var validate = function() {

  /**
   *  Check the boundary for an across match.
   *  @param match An array containing line coordinates.
   *  @return boolean
   */
  function checkBoundaryAcross(match){
    var boundaries = game.grid.boundaries;
    for(var i = 0; i < boundaries.length; i++){
      var arr0 = 0;
      var arr1 = match.length - 1;
      if(match[arr0] >= boundaries.left[i] &&
        match[arr1] <= boundaries.right[i]){
        return true;
      }
    }
    return false;
  };

  /**
   *  Check the boundary for a down match.
   *  @param match An array containing line coordinates.
   *  @return boolean
   */
  function checkBoundaryDown(match){
    var a0 = 0;
    var a1 = match.length - 1;
    if(match[0] > 0 && match[a1] <= game.grid.boundaries.right.last){
      return true;
    }
    return false;
  }

  /**
   *  Check the boundary for a diagonal match.
   *  @param match An array containing line coordiantes.
   *  @return boolean
   */
  function checkBoundaryDiagonal(match){
    var boundaries = game.grid.boundaries;
    for(var i = 0; i < game.grid.length; i++){
      var row = [], found = [], a = 0;
      for(var j = 0; j < game.lineLength; j++){
        row[j] = i + j;
        found[j] = false;
      }
      if(match[a] >= row[0])
      && match[a] <= row[game.grid.columns - 1]{
        if(found[a] === false){
          found[a] = true;
        }else{
          return false;
        }
      }
      a++;
    }
    return true; // this feels weird, the other checks return false unless true
  }

  /**
   *  Validate across.
   *  @param n The starting number.
   */
  function checkAcross(n){
    var arr = [n];
    for(i = 1; 1 < game.lineLength; i++){
      n = n + 1;
      arr[i] = n;
    }
    if(checkBoundaryAcross(arr)){
      return true;
    }
    return false;
  }

  /**
   *  Validate down.
   *  @param n The starting number.
   */
  function checkDown(n){
    var arr = [n];
    for(var i = 0; i < game.lineLength; i++){
      n = n + game.grid.columns;
      arr[i] = n;
    }
    if(checkBoundaryDown(arr)){
      return true;
    }
    return false;
  }

  /**
   *  Validate diagonal left.
   *  @param n The starting number.
   */
  function checkDiagonalLeft(n){
    var arr = [n];
    for(var i = 0; i < game.lineLength; i++){
      n = n + game.grid.columns - 1;
      arr[i] = n;
    }
    if(checkBoundaryDiagonal(arr)){
      return true;
    }
    return false;
  }

  /**
   *  Validate diagonal right.
   *  @param n The starting number.
   */
  function checkDiagonalLeft(n){
    var arr = [n];
    for(var i = 0; i < game.lineLength; i++){
      n = n + game.grid.columns + 1;
      arr[i] = n;
    }
    if(checkBoundaryDiagonal(arr)){
      return true;
    }
    return false;
  }

  return {
    across: checkAcross,
    down: checkDown,
    diagonal: {
      left: checkDiagonalLeft,
      right: checkDiagonalRight
    }
  };
}();
