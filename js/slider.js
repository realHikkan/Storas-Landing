$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:2,
		slidesToScroll:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:2000,
		responsive:[
			{
				breakpoint: 767,
				settings: {
					infinite: true,
					autoplay:true,
					slidesToShow:2,
					speed:1000,
					autoplaySpeed:2000,
				}
			},
			{
				breakpoint: 500,
				settings: {
					infinite: true,
					autoplay:true,
					slidesToShow:1,
					slidesToScroll:1,
					speed:1000,
					autoplaySpeed:2000,
				}
			},
		]
	});
});

