$(document).ready(function() {
    $('.carousel').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false
    });

    $(window).scroll(function() {
        var verticalPosition = $(this).scrollTop();
        var navbarHeight = $('.navbar').css('height');
        if (verticalPosition - userScroll >= 50) {
            $('.navbar').animate({top: '-'+navbarHeight}, 150);
            userScroll = verticalPosition;
        }
        if (userScroll - verticalPosition >= 50) {
            $('.navbar').animate({top: 0}, 150);
            userScroll = verticalPosition;
        }
    });
});

var userScroll = 0;