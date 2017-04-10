var grid = function(config){

  var rows = config.rows || 0;
  var columns = config.rows || 0;

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

  return {

  };

}();
