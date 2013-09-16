jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    links.push($('.splash').find('a')[0]);


   


    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() === 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="3"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        if (dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2500, 'easeInOutElastic');
    }
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });

    var windowHeight = $(window).height();
   $('.slide').css('min-height', windowHeight);


});