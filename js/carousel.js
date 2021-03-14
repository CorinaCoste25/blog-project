jQuery(function() {
        // owl- carousel for blog
        $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 7000,
            dots: false,
            nav: true,
            navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
            responsive: responsiveObj
        });
    
        let postLocationInfo  = $('.popular-posts .post-image .post-info').data('postLocation');
        if(postLocationInfo === 'sidebar'){
            $('.popular-posts .post-image .post-info').css({
                'padding': '0.4rem 0.1rem',
                'bottom': '0rem',
                'left': '1rem',
                'border-radius': '0rem',
                'background': 'white'
            });
        }
    
    
        let postLocationImage = $('.popular-posts .post-image').data('postLocation');
        if(postLocationImage === 'sidebar') {
            $('.popular-posts .post-image img').css({
                'height': '200px',
            })
        }

        // animate on scroll (AOS)
    AOS.init();
    
})