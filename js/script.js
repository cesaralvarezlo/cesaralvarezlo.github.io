//Plugin Glider - Carousel
window.addEventListener('load', function(){

	new Glider(document.querySelector('.carousel-lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots: '.carousel-dots',
		arrows: {
			prev: '.carousel-prev',
			next: '.carousel-next'
		},
		responsive: [
			{
			    // screens max-width 480px
			    breakpoint: 480,
			    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
			    }
            },
            {
			    // screens max-width 800px
			    breakpoint: 800,
			    settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
			    }
			}
        ]
        
    });
    
});