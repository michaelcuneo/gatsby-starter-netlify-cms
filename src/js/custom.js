jQuery(document).ready(function($){
	//using bxslider in main slider
    
        $('.testimonial-slider').bxSlider({
            //adaptiveHeight: true,
            pager: false,
            controls: false,
            mode: 'fade',
            auto : true
        });
    
    // Wow js
    new WOW().init();
    

    //Search Box Toogle
    $('.ed-search-wrap .search-icon .fa-search').click(function(){
      $('.ed-search-wrap').addClass('show');
    });
    $('.ed-search-wrap .ed-search .search-close').on('click', function(){
      $('.ed-search-wrap').removeClass('show');
    });

    //go to top 
    if ($('#go-to-top').length) {
        var scrollTrigger = 100, // px
        goToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#go-to-top').addClass('show');
            } else {
                $('#go-to-top').removeClass('show');
            }
        };
        goToTop();
        $(window).on('scroll', function () {
            goToTop();
        });
        $('#go-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }


    //isotope data filter

    $('.portfolio-wrap').imagesLoaded( function() {
        var $grid = $('.ed-sortable-grid').isotope({
            itemSelector: '.element-item',
            resize: false,
        });           

        // bind filter button click
        $('.filters-button-group').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });

        // change is-checked class on buttons
        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    });

    

    //sticky menu
    //var topPos = $('#content').position();
    var topPos = $("#masthead").height();
    $(window).scroll(function(){
        if($(window).scrollTop() > topPos){
            $('#masthead').addClass('fixed');
        }else{
            $('#masthead').removeClass('fixed');
        }
    }).scroll();

    $('.toggle-btn').click(function(){
        $('.main-navigation').toggleClass('toggled');
    });

    $('body').on('click','.main-navigation.toggled > ul > li',function(){
       $('.main-navigation').toggleClass('toggled'); 
    });

});