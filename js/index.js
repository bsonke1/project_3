$('.form-control').keypress(function(e) {
 if(e.keyCode == 13 & $(this).val() != "") {
   window.location.href = "results.html?=" + $(this).val();
 }
});

var cycle = 0;
window.setInterval(function() {
  $(".images").animate({left:"-=100%"});
  
  
  var h = $(".text2").height().toString();
  if(cycle == 0) {
    $("#music").css("top","0"); $("#learn").css("top", h);
    $("#music").animate({
      top: "-="+h,
      opacity: 0
    })
    $("#learn").animate({
      top: "-="+h,
      opacity: 1
    })
  }
  else if(cycle == 1) {
    $("#learn").css("top","0"); $("#gallery").css("top", h);
    $("#learn").animate({
      top: "-="+h,
      opacity: 0
    })
    $("#gallery").animate({
      top: "-="+h,
      opacity: 1
    })
  }
  else if(cycle == 2) {
    $("#gallery").css("top","0"); $("#music").css("top", h);
    $("#gallery").animate({
      top: "-="+h,
      opacity: 0
    })
    $("#music").animate({
      top: "-="+h,
      opacity: 1
    })
  }
  
  cycle += 1;
  if(cycle >= 3) {
    cycle = 0;
    $(".images").animate({
    left:"0%"
  }, 0);
  }
  
}, 7000);