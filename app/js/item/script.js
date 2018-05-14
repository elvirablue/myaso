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

    $( "#selector1" ).slider({
        range: "min",
        value: 1000000,
        min: 20000,
        max: 15000000,
        slide: function( event, ui ) {
            var str = ui.value.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ");
            $("#amount1").text(str);
        }
    });
    $( "#selector2" ).slider({
        range: "min",
        value: 500,
        min: 50,
        max: 2000,
        slide: function( event, ui ) {
            $("#amount2").text( ui.value.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 "));
        }
    });
    $( "#selector3" ).slider({
        range: "min",
        value: 50,
        min: 10,
        max: 300,
        slide: function( event, ui ) {
            $("#amount3").text( ui.value);
        }
    });



});