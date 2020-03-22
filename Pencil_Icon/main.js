$(document).keypress(function reveal() {

  $("#visibility-window").css("opacity", "1");
  $("#visibility-window").css("transform", "scale(1,1)");
  
  });

$(document).keyup(function hide() {
  
  $("#visibility-window").css("opacity", "0");
  
});

$(document).keyup(function backspace(e) {
  var keyCode = e.keyCode;
  if(keyCode == 8) {
      $("#visibility-window").css("opacity", "1");
      $("#visibility-window").css("transform", "translateY(10px) scale(-1,-1)");
 setTimeout(function() {
   $("#visibility-window").css("opacity", "0");
 }, 80);
  };

});