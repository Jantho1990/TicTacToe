var grid = function(config){

  var rows = config.rows || 0;
  var columns = config.rows || 0;

  var grid;

  /**
   *  The boundaries of the grid.
   */
  var bounds = function(){
    var ret = { left: null, right: null };
    var j = 0;
    for(var i = 0; i < grid.length; i += grid.columns){
      ret.left[j] = i;
      ret.right[j++] = i + grid.columns - 1;
    }
    return ret;
  }();

  /**
   *  Create the grid.
   *  @param els The html elements comprising the grid.
   *  @param rows The number of rows the grid should have.
   *  @param cols The number of columns the grid should have.
   *  @return Grid object
   */
  function createGrid(els, rows, cols){
    // Make sure we have the right number of elements.
    if(els.length !== (rows * cols)){
      console.log('Wrong number of elements.', els.length);
      return false;
    }
    // Assign elements to rows and columns.
    var ct = 0;
    for(var i = 0; i < rows; i++){
      grid[i] = [];
      for(var j = 0; j < cols; j++){
        grid[i][j] = {
          el: els[ct++],
          content: null
        };
      }
    }
  }

  return {
    rows: rows,
    columns: columns,
    boundaries: bounds
  };

}();
