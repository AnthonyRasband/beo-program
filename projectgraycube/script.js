$(document).ready(function() {
    var grid = $('#container');
  
    for (var i = 0; i < 4; i++) {
      var row = $('<div class="row"></div>');
  
      for (var j = 0; j < 4; j++) {
        var box = $('<div class="box"></div>');
        row.append(box);
      }
  
      grid.append(row);
    }
  
    $('.box').click(function() {
      $(this).toggleClass('active');
    });
  });
  