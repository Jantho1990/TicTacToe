var Grid = function(config){
  console.log(config);
  var _rows = config.rows || 0;
  var _columns = config.columns || 0;
  var _els = config.els || null;

  var _grid = [];

  // Make sure we have the right number of elements.
  if(els.length !== (_rows * _columns)){
    console.log('Wrong number of elements.', els.length);
    return false;
  }
  // Assign elements to rows and columns.
  var ct = 0;
  for(var i = 0; i < _rows; i++){
    _grid[i] = [];
    for(var j = 0; j < _columns; j++){
      _grid[i][j] = {
        el: _els[ct++],
        content: null
      };
    }
  }

  _grid.__proto__.rows = _rows;
  _grid.__proto__.columns = _columns;
  console.log(_grid);


  /**
   *  The boundaries of the grid.
   */
  var _boundaries = function(){
    var ret = { left: [], right: [] };
    var j = 0;
    for(var i = 0; i < els.length; i += _columns){
      ret.left[j] = i;
      ret.right[j++] = i + _grid.columns - 1;
    }
    ret.first = ret.left[0];
    ret.last = ret.right[ret.right.length - 1];
    return ret;
  }();

  _grid.__proto__.boundaries = _boundaries;

  return _grid;

};
