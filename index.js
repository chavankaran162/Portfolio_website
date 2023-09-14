$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $('.navbar').addClass('sticky')
        }
        else
        {
            $('.navbar').removeClass('sticky')
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show')
        }
        else
        {
            $('.scroll-up-btn').removeClass('show')
        }

    });

    // slide-up script

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop :0});
    })

});

$(document).ready(function(){
    $('.menu-icon').click(function(){
        $(' .nav-wrapper .menu').addClass('active')
    });

    $('.close-icon').click(function(){
        $(' .nav-wrapper .menu').removeClass('active')
    });
});

// owl carsol scropt

$('.carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
        
    }
})
