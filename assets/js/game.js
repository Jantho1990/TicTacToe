var Game = function(config){
  var _lineLength = config.lineLength || 3;
  var _grid = new Grid(config.grid);

  return {
    lineLength: _lineLength,
    grid: _grid
  }

};
