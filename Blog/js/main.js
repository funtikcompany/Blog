$(function(){
    $(".slider").slick({
		 nextArrow: ' <button type="button" class=" slick-btn slick-next"></button>',
         prevArrow: ' <button type="button" class="slick-btn slick-prev"></button>',
        slidesToScroll: 1,
        fade: true,
        speed:300,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite:true,
        

	});
	$("#menu_toggle").on("click", function (event) {
		event.preventDefault();
	
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});
	
    

})


