$(document).on('ready', function(){ 
	
  $('.nav.navbar-nav a').click(function () { 
    var el = $(this).attr('href');
    $('html,body').animate({scrollTop: $(el).offset().top - 200}, 600);
    $('.collapse').collapse('hide');
    return false;
  });
  //$('.js-adv1').click(function () {
  //    if ($(window).width() < '768') return;
  //    $('.adv2, .adv3').hide(400);
  //    $('.adv1').show(300);
  //});
  //  $('.js-adv2').click(function () {
  //      if ($(window).width() < '768') return;
  //      $('.adv1, .adv3').hide(400);
  //      $('.adv2').show(300);
  //  });
  //  $('.js-adv3').click(function () {
  //      if ($(window).width() < '768') return;
  //      $('.adv1, .adv2').hide(400);
  //      $('.adv3').show(300);
  //  });

  //$(window).scroll(function(){
  //  if ($(window).scrollTop() >= 100) {
  //      $('.navbar-myaso').addClass('scroll');
  //  }
  //  if ($(window).scrollTop() < 100) {
  //    $('.navbar-myaso').removeClass('scroll');
  //}
  //});

  //*****************
    var owl = $('#owl1');

    owl.owlCarousel({
        loop:true,//Зацикливаем слайдер
        margin:30,
        navigation : true,
        dots: true,
        //autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
        //autoplay:true, //Автозапуск слайдера
        smartSpeed:1500, //Время движения слайда
        autoplayTimeout:40, //Время смены слайда
        responsiveClass:true,
        nav:true,
        responsive:{
            0:{
                items:1,
                dots: false
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });



});