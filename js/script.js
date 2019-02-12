$(document).ready(function(){


  $(".order").hover(function(){
    $(".order-hover").fadeToggle();
  });



  $(".button-order").click(function(){
    $(".order-form").fadeIn();
    $('#overlay').addClass('new-overlay').fadeIn();

  });

});

$(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".order-form"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide();
			$('#overlay').removeClass(); // скрываем его
		}
	});
});
  
