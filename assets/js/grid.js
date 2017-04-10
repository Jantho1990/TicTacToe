function Grid(config){
  var _rows = config.rows || 0;
  var _columns = config.columns || 0;
  var _container = config.container || null;

  var _length = _rows * _columns;

  var _grid = [];

  /**
   *  Create a grid element.
   */
  function createGridElement(){
    var el = document.createElement('span');
    el.classList.add('board-square');
    _container.appendChild(el);
    return el;
  }

  // Assign elements to rows and columns.
  for(var i = 0; i < _rows; i++){
    _grid[i] = [];
    for(var j = 0; j < _columns; j++){
      _grid[i][j] = {
        el: createGridElement(),
        content: null
      };
    }
  }

  _grid.rows = _rows;
  _grid.columns = _columns;


  /**
   *  The boundaries of the grid.
   */
  var _boundaries = function(){
    var ret = { left: [], right: [] };
    var j = 0;
    for(var i = 0; i < _length; i += _columns){
      ret.left[j] = i;
      ret.right[j++] = i + _grid.columns - 1;
    }
    ret.first = ret.left[0];
    ret.last = ret.right[ret.right.length - 1];
    return ret;
  }();

  _grid.boundaries = _boundaries;

  return _grid;

};
