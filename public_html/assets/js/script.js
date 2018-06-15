$(document).ready(function () {
    $(".rules_wrapper").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 150;
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });
    $(".about_wrapper").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 150;
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });
    $('.product_block').click(function (event) {
        if(event.target == $('.button1')[0] || event.target == $('.button2')[0]){
            event.preventDefault();
        }

    });

});

$('.wish_slider_wrapper').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2500,
	fade: true,
	zIndex: 100
});




$('.main_mob_slider_wrapper').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2500,
	fade: true,
	zIndex: 100
});



$('.product_slider_wrapper').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	dots: true,
	arrows: true,
	nextArrow: '<div class="product_next_arrow"></div>',
    prevArrow: '<div class="product_prev_arrow"></div>',
	autoplay: true,
	autoplaySpeed: 2500,
	fade: true,
	zIndex: 100
});


$('.review_slider_viewer').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="comment_next_arrow"></div>',
    prevArrow: '<div class="comment_prev_arrow"></div>',
    dots: true,
    arrows: true,
    fade: true,
    zIndex: 100,
    customPaging : function(slider, i) {
        var length = slider.$slides.length;
        $('.reviews_count').text(length);
        return i + 1 + '/' + length;
        }
});


$('.nav_header_menu li').mouseover(function(){
	$('.nav_list').velocity({'height': '55vh'}, 300);
});

$('.nav_list').mouseleave(function(){
	$('.nav_list').velocity({'height': 0}, 150);
});


// for moble

$('.nav_header_menu').click(function(){
    if($(this).hasClass('active_mob_menu')) {
        $('.nav_list').velocity({'height': 0}, 300);
    } else {
        $('.nav_list').velocity({'height': '100vh'}, 400);

    };
    $(this).toggleClass('active_mob_menu');

});
$('.page_header').click(function () {
   var height = $(this).next().next().css('height');
    $('.page_header').parent().velocity({
        height: '30px'
    }, 350);
   $(this).parent().velocity({
       'height' : (height + '30px')
   }, 600);
});
$('.product_about_header').click(function () {
    if(!$(this).hasClass('product_about_header_active')) {
        $('.product_about_header').removeClass('product_about_header_active');
        $(this).addClass('product_about_header_active');
        var height = parseInt($(this).next().css('height'), 10) + 50;
        $('.product_about_header').parent().velocity({
            height: '30px'
        }, 350);
        $(this).parent().velocity({
            'height' : height
        }, 600);
    } else {
        $(this).parent().velocity({
            'height' : '30px'
        }, 600);
        $('.product_about_header').removeClass('product_about_header_active');
    }


});
$('.about_mob_info_header').click(function () {

    if(!$(this).hasClass('about_mob_info_active')) {
        $('.about_mob_info_header').removeClass('about_mob_info_active');
        $('.about_mob_info_header').next().velocity({
            height : 0
        }, 350);
        $(this).addClass('about_mob_info_active');
        var height = $(this).next().children('.about_help_container').css('height');
        $(this).next().velocity({
            height : height
        }, 850);
    } else {
        $('.about_mob_info_header').removeClass('about_mob_info_active');
        $(this).next().velocity({
            height : 0
        }, 350);
    }
});
$('.rules_header').click(function () {

    if(!$(this).hasClass('about_mob_info_active')) {
        $('.rules_header').removeClass('about_mob_info_active');
        $('.rules_header').next().velocity({
            height : 0
        }, 350);
        $(this).addClass('about_mob_info_active');
        var height = $(this).next().children('.about_help_container').css('height');
        $(this).next().velocity({
            height : height
        }, 850);
    } else {
        $('.rules_header').removeClass('about_mob_info_active');
        $(this).next().velocity({
            height : 0
        }, 350);
    }
});


// for mobile -- end

var $productTabs = $('.product_about_head li');
var $productTexts = $('.product_about_block');
$productTabs.click(function () {

    for(var i = 0; i < $productTabs.length; i++) {
        if($(this)[0] == $productTabs[i]) {
            $productTabs.removeClass('product_about_active');
            $productTexts.removeClass('product_about_text_active');
            $(this).addClass('product_about_active');
            $($productTexts[i]).addClass('product_about_text_active');
        }
    }
});


$('.nav_heart').click(function(){
	$('.wish_window').velocity({'right': 0}, 300);
});
$('.wish_window_close').click(function(){
	$('.wish_window').velocity({'right': '-770px'}, 300);
});



$('.nav_basket').click(function(){
	$('.basket_window').velocity({'right': 0}, 300);
});
$('.basket_window_close').click(function(){
	$('.basket_window').velocity({'right': '-770px'}, 300);
});

var $share = $('.share_img_animated');
var sharePosition;
if($('.share')[0] != undefined) {
    sharePosition = $('.share')[0].offsetTop;
}
var shareHeight = parseInt($('.share').css('height') , 10) ;
var shareStatus = 0;

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled > sharePosition-shareHeight*0.3 && scrolled < sharePosition+shareHeight*0.3) {
        shareStatus = -(scrolled-(sharePosition-shareHeight*0.3))*0.7;
        if(shareStatus < 0) {
            $share.css('top' , shareStatus);
        }

    }
};
function showList(){
	var height = 0;
	if(!$(this).hasClass('active_arrow')) {
        height = $(this).next().children().css('height');
        $(this).addClass('active_arrow').next().velocity({'height': height}, 600 );
        return;
	}
    $(this).removeClass('active_arrow').next().velocity({'height': height}, 450 );
}
function showNextList(){
    var height = 0;
    if(!$(this).hasClass('active_arrow')) {
        height = $(this).next().children().css('height');
        height = parseInt(height , 10) * $(this).next().children().length;
        $(this).addClass('active_arrow').next().velocity({'height': height}, 600 );
        height = $(this).parent().css('height');
        // $(this).parent().parent().velocity({'height' : 'auto'}, 600);
        $(this).parent().parent().css('height', 'auto');
        return;
    }
    $(this).removeClass('active_arrow').next().velocity({'height': height}, 450 );
    $(this).parent().parent().css('height', 'auto');
}







$('.listing_page_sub_header').click(showList);
$('.product_header_arrow').click(showList);

$('.listing_page_form_text').click(showNextList);



$('.show_search').click(function(){
	$('.search').css({'display': 'block'}, 300);
});


(function(){
	var menuPuncts = $('.nav_header_menu li');
	var pageList = $('.page');
	var navList = $('.nav_list');
	var navMenu = $('.nav_header_menu');
	for(var i = 0; i < menuPuncts.length; i++) {
		var clss = 'action_' + i;
		$(menuPuncts[i]).addClass(clss);
		$(pageList[i]).addClass(clss);
	};
	menuPuncts.mouseover(function(){
		var clss = $(this).attr('class');
		var clss = '.' + clss;
		pageList.removeClass('page_list_active');
		menuPuncts.removeClass('active_page');
		$(this).addClass('active_page');
		navList.find(clss).addClass('page_list_active');
	});



})();








