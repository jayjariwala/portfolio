

$(document).ready(function(){



$(window).scroll(function(){
  var wscroll=$(this).scrollTop();
  console.log(wscroll);

  $('.halfcircle4').css({
    'transform' :'translate(0 ,'+wscroll+'%) rotate('+(wscroll+ (-150))/4+'deg)'
  });

  $('.halfcircle5').css({
    'transform' :'translate(0 ,-'+wscroll/2+'%) rotate(-220deg)'
  });

  $('.halfcircle1').css({
    'transform' :'rotate('+(wscroll+ (-240))/2+'deg)'
  });

  $('.square').css({
      'transform' :'translate(0 ,'+wscroll+'%) rotate(-220deg)'
  });




})


})
