$(document).ready(function(){
  $(".order").hover(function(){
    $(".order-hover").fadeToggle();
  });


  $(".button-order").click(function(){
    $(".order-form").fadeIn();
    $(".overlay:before").fadeIn();
  });
});