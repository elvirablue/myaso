  
$(document).on('ready', function(){ 
//******************модальные окна для форм**************************************************    
  
   
    var popup_wrapper = document.querySelector('.modal_wrapper');
    var popup;
    var close;


    $('.js-modal-open').click(function(event){
           event.preventDefault();
          popup = document.querySelector('.js-modal');
          close = popup.querySelector('.modal_close');      
          popup.querySelector('.button').innerText = this.innerText;   
          popup.querySelector('.modal__title').innerText = popup.querySelector('.hidden').value = this.getAttribute('data-title-modal'); 
          popup.style.height = 'auto';         
          var heightModal = $('.js-modal').height();
          popup.style.marginTop = '-' + heightModal/2 + 'px';               
          PopupShow(event);
    });
    $('.js-modal-mini-open').click(function(event){
        event.preventDefault();
        popup = document.querySelector('.js-modal-mini');
        close = popup.querySelector('.modal_close');
        popup.querySelector('.button').innerText = this.innerText;
        popup.querySelector('.modal__title').innerText = popup.querySelector('.hidden').value = this.getAttribute('data-title-modal');
        popup.style.height = 'auto';
        var heightModal = $('.js-modal-mini').height();
        popup.style.marginTop = '-' + heightModal/2 + 'px';
        PopupShow(event);
    });

    function PopupShow(event) {
          event.preventDefault();
          popup.classList.remove('zoomOut');
          popup_wrapper.classList.remove('fadeOut');
          popup.classList.add('show', 'zoomIn');
          popup_wrapper.classList.add('show', 'fadeIn');
          
    };
   

    function closePopup() {
         
          if (popup.classList.contains('show')) {
                popup.classList.add('zoomOut');
                popup_wrapper.classList.add('fadeOut');
                setTimeout(function(){
                      popup.classList.remove('show', 'zoomIn' );      
                      popup_wrapper.classList.remove('show', 'fadeIn');
                }, 100);
                
          };
          
    }

    window.addEventListener('keydown', function(event) {
          if (event.keyCode === 27) {
                closePopup();
          };
    });

    popup_wrapper.addEventListener('click', function(event) {
          closePopup();
          
    });
 
    $('.modal_close').click(function(event) {
          event.preventDefault();
          popup = document.querySelector('.modal.show');
          closePopup();
    });


});
$(document).ready(function() {
 
	$("form").submit(function() {
		var $form = $(this);
		var data = $form.serialize();
		
		if (validateForm($form)) {
			$.post("./assets/mail.php", data, function(resp) {});
			
			
//*************************************************************************************************
			//КОД ДЛЯ GOOGLE ANALYTICS:
			//ga('send', 'event', 'FormContact1', {nonInteraction: true});
			//ga('send', 'event',	'FormContact1', 'play', 'Fall Campaign');

//*************************************************************************************************			
			//КОД ДЛЯ МЕТРИКИ ЯНДЕКС:
			// ЗДЕСЬ ХХХХХХ - номер счетчика, FormContact - имя события, которое будет отображаться в метрике
			//yaCounter39173625.reachGoal('FormContact');
//*************************************************************************************************

			$('#exampleModal').arcticmodal({
				beforeOpen: function(data, el) {
					if ($('.modal').hasClass('show')) {
						$('.modal').addClass('zoomOut');						
                  		$('.modal_wrapper').addClass('fadeOut');                  		
                        $('.modal').removeClass('show zoomIn');      
                        $('.modal_wrapper').removeClass('show fadeIn');                  		
                 	}
				}				
    		});
//
		} else { return false; };

		return false;
	});

});
 

function validateForm($form) {
	var valid = true;
	$form.find(".required").each(function(index, element) {
		if ($(element).val() == "") {
			$(element).addClass("modal_error");
			setTimeout(function(){
                        $(element).removeClass('modal_error');
                  }, 1500);
			valid = false;
		}
		else {
			$(element).removeClass("modal_error");
		}
	});
	return valid;

}
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