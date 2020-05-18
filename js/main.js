$('.progrees > div').each(function(){
    var width=$(this).data('width');
    $(this).animate({ width: width }, 2500);
    $(this).after( '<span class="perc">' + width + '</span>');
    $('.perc').delay(3000).fadeIn(1000);
});


/*---------------------------------------------*
         * SCROLL TO TOP - ALL VIDEOS PAGE
         ---------------------------------------------*/


        jQuery("#scrollTop").click(function () {
                jQuery("body,html").animate({
                    scrollTop: 0
                }, 600);
            });
            jQuery(window).scroll(function () {
                if (jQuery(window).scrollTop() > 250) {
                    jQuery("#scrollTop").addClass("visible");
                } else {
                    jQuery("#scrollTop").removeClass("visible");
                }
                
             
               
            });


$(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 600) {
	    $(".navbar").css({"background-color": "rgba(0,0,0,0.6)", "transition": ".7s "});
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  });
     
new WOW().init();
