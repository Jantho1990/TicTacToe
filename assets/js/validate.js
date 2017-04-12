var validate = function() {

  /**
   *  Check the boundary for an across match.
   *  @param match An array containing line coordinates.
   *  @return boolean
   */
  function checkBoundaryAcross(match){
    var boundaries = game.grid.boundaries;
    for(var i = 0; i < game.grid.rows; i++){
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
    if(match[0] >= 0 && match[a1] <= game.grid.boundaries.last){
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
    // for(var i = 0; i < game.grid.rows; i++){
    //   var row = [], found = [], a = 0;
    //   for(var j = 0; j < game.lineLength; j++){
    //     row[j] = i + j;
    //     found[j] = false;
    //   }
    //   if(match[a] >= row[0]
    //   && match[a] <= row[game.grid.columns - 1]){
    //     if(found[a] === false){
    //       found[a] = true;
    //     }else{
    //       return false;
    //     }
    //   }
    //   a++;
    // }
    var ret;
    for(var i = 0; i < game.grid.rows; i++){
      if(match[i] >= game.grid.boundaries.left[i]
      && match[i] <= game.grid.boundaries.right[i]){
        ret = true;
      }else{
        ret = false;
        break;
      }
    }
    //return true; // this feels weird, the other checks return false unless true
    return ret;
  }

  /**
   *  Check to see if match is a line across.
   *  @param match An array of grid coordinates.
   *  @return boolean
   */
  function checkLineAcross(match){
    var ret = false;
    for(var i = 1; i < match.length; i++){
      // In an across line, entry - prevEntry should
      // always be equal to 1.
      if(match[i] - match[i - 1] === 1){
        if(!ret){ret = true;}
      }else{
        ret = false;
        break;
      }
    }
    return ret;
  }

  /**
   *  Check to see if match is a line down.
   *  @param match An array of grid coordinates.
   *  @return boolean
   */
  function checkLineDown(match){
    var ret = false;
    var c = game.grid.columns;
    for(var i = 1; i < match.length; i++){
      // In a down line, entry - prevEntry should
      // always be equal to # of grid rows.
      if(match[i] - match[i - 1] === c){
        if(!ret){ret = true;}
      }else{
        ret = false;
        break;
      }
    }
    return ret;
  }

  /**
   *  Check to see if match is a diagonal line forward.
   *  @param match An array of grid coordinates.
   *  @return boolean
   */
  function checkLineDiagonalForward(match){
    var ret = false;
    var c = game.grid.columns;
    for(var i = 1; i < match.length; i++){
      // In an across line, entry - prevEntry should
      // always be equal to # grid columns - 1.
      if(match[i] - match[i - 1] === (c - 1)){
        if(!ret){ret = true;}
      }else{
        ret = false;
        break;
      }
    }
    return ret;
  }

  /**
   *  Check to see if match is a diagonal line backward.
   *  @param match An array of grid coordinates.
   *  @return boolean
   */
  function checkLineDiagonalBackward(match){
    var ret = false;
    var c = game.grid.columns;
    for(var i = 1; i < match.length; i++){
      // In an across line, entry - prevEntry should
      // always be equal to # grid columns + 1.
      if(match[i] - match[i - 1] === (c + 1)){
        if(!ret){ret = true;}
      }else{
        ret = false;
        break;
      }
    }
    return ret;
  }

  /**
   *  Validate across.
   *  @param match An array of grid coordinates.
   *  @return boolean
   */
  function checkAcross(match){
    if(checkLineAcross(match)
    && checkBoundaryAcross(match)){
      return true;
    }
    return false;
  }

  /**
   *  Validate down.
   *  @param match The starting number.
   *  @return boolean
   */
  function checkDown(match){
    if(checkLineDown(match)
    && checkBoundaryDown(match)){
      return true;
    }
    return false;
  }

  /**
   *  Validate diagonal left.
   *  @param match The starting number.
   *  @return boolean
   */
  function checkDiagonalForward(match){
    if(checkLineDiagonalForward(match)
    && checkBoundaryDiagonal(match)){
      return true;
    }
    return false;
  }

  /**
   *  Validate diagonal right.
   *  @param match The starting number.
   *  @return boolean
   */
  function checkDiagonalBackward(match){
    if(checkLineDiagonalBackward(match)
    && checkBoundaryDiagonal(match)){
      return true;
    }
    return false;
  }

  return {
    across: checkAcross,
    down: checkDown,
    diagonal: {
      forward: checkDiagonalForward,
      backward: checkDiagonalBackward
    }
  };
}();
