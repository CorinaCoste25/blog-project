const responsiveObj = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    }, 
    960: {
        items: 3
    },
    1200: {
        items: 4
    }
}

jQuery(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse i');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })


    // click to scroll up
    $('.go-up span').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    

    // verify email
    function validateEmail(email) {
        let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
            alert("Your email adress is incorrect")
        }
    }
});