$(document).ready(function()
{
$(window).bind('mousewheel', function(event) {
  if (event.originalEvent.wheelDelta >= 0) {
      // console.log('Scroll up');
$(".nav-bar").show();
      // $(".nav-bar").addClass("nav-jquery");
  }
  else {
      // console.log('Scroll down');
   $(".nav-bar").hide();
  }
});
});


$(document).ready(function(){
$(".ham-menu1").click(function(){
$(".ham-menu").toggle();


});
});
$(document).ready(function(){
  $(".ham-links").click(function(){
  $(".ham-menu").hide();
  
  });
  });