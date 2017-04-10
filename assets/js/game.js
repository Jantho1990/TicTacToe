var game = function(config){
  var lineLimit = config.lineLimit || 3;
  var grid = new grid(config.grid);

  return {
    lineLimit: lineLimit
  }

}();
