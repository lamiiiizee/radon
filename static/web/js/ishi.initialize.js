/**
 * ishiinitialize v1.1
 * JavaScript to initalize various theme components
 */

var opencart_responsive_current_width = window.innerWidth;
var opencart_responsive_min_width = 992;
var opencart_responsive_mobile = opencart_responsive_current_width < opencart_responsive_min_width;
jQuery(document).ready(function( $ ) {
    'use strict';
    $(window).on('resize', function () {
        var _cw = opencart_responsive_current_width;
        var _mw = opencart_responsive_min_width;
        var _w = window.innerWidth;
        var _toggle = _cw >= _mw && _w < _mw || _cw < _mw && _w >= _mw;
        opencart_responsive_current_width = _w;
        opencart_responsive_mobile = opencart_responsive_current_width < opencart_responsive_min_width;
        if (_toggle) {
            toggleMobileStyles();
        }
    });

    if (opencart_responsive_mobile) {
        toggleMobileStyles();
    }

    $('#spin-wrapper').fadeOut();
    $('#siteloader').fadeOut();

    (function($) {
    function mediaSize() { 
      if (window.matchMedia('(min-width: 992px)').matches) {
        var headerHeight = $('#header').height();
        var navHeight = $('#header .site-header-inner').height();
        $(window).scroll(function(){
           if ($(window).scrollTop() > headerHeight) {
                $('.header-top').addClass('fixed-header');
            }
            else {
                $('.header-top').removeClass('fixed-header');
            }
        });
      }
    };
    mediaSize();
    window.addEventListener('resize', mediaSize, false);  
  })(jQuery);

    var headerHeight = $('#header').height();
    var navHeight = $('#header .nav-full-width').height();
    $(window).scroll(function(){
        if ($(window).scrollTop() > headerHeight) {
            $('.nav-full-width').addClass('fixed-header');
        }
        else {
            $('.nav-full-width').removeClass('fixed-header');
        }
    });

    adjustTopMenu();

    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	if(!isMobile) {
	    if($(".parallax").length) {
	        $(".parallax").sitManParallex({  invert: false });
	    };
	} else {
	    $(".parallax").sitManParallex({  invert: true });
	}

	$(window).resize(function() {
    	adjustTopMenu();
         
    });

    if ($('#ishiparallaxbanner .parallax').data('deal') == '1') {
        var time = $('#ishiparallaxbanner .parallax').data('counter');
        var container = $('#ishiparallaxbanner .parallax').find('#parallaxcountdown');

        $(container).countdown(time, function (event) {
            $(this).find(".countdown-days .data").html(event.strftime('%D'));
            $(this).find(".countdown-hours .data").html(event.strftime('%H'));
            $(this).find(".countdown-minutes .data").html(event.strftime('%M'));
            $(this).find(".countdown-seconds .data").html(event.strftime('%S'));
            ;
        });
    }    
    
    $('#header .blockcart .product-container').slimScroll({
      height: $('#header .blockcart .product-container .product').length > 1 ? '240px':'100%'
    });

    $(document).on('click', '.cart-link', function () {
        $(this).siblings('.cart-dropdown').stop(true, true).slideToggle();
    });

    $(document).on('click', '.account-logo', function () {
        $(this).siblings('.account-dropdown').stop(true, true).slideToggle();
    });
    $('#search_widget .search-logo').click(function() {
        $(this).toggleClass('active').parents('#search_widget').find('form').stop(true,true).slideToggle('medium');
    });

    $('#menu-icon').on('click', function () {
        $("#mobile_top_menu_wrapper").animate({
            width: "toggle"
        });
        $('#menu_wrapper').toggleClass('active');
    });

    $('#top_menu_closer i').on('click', function () {
        $("#mobile_top_menu_wrapper").animate({
            width: "toggle"
        });
        $('#menu_wrapper').toggleClass('active');
    });

    $('#menu_wrapper').on('click', function () {
        $("#mobile_top_menu_wrapper").animate({
            width: "toggle"
        });
        $('#menu_wrapper').toggleClass('active');
    });

	$(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#slidetop').fadeIn(500);
        } else {
            $('#slidetop').fadeOut(500);
        }
    });

    $('#slidetop').click(function(e) {
        e.preventDefault();     
        $('html, body').animate({scrollTop: 0}, 800);
    });

    $("a.scrollLink").click(function(e){
        $('.product-block-information .nav-tabs .nav-item .nav-link').removeClass('active');
        $('.product-block-information .nav-tabs .nav-item:nth-child(3) .nav-link').addClass('active');
        $('.product-block-information .tab-pane').removeClass('active');
        $('#tab-review').addClass('active in');
        
        e.preventDefault();
        $('html, body').animate({
             scrollTop: $( $(this).attr('href') ).offset().top
         }, 2000);
        
     });
    
    $(document).on( "click",".product-quantity-selector .button",function() {
        var n = $(".product-quantity-selector .quantity").val();
        if($(this).text() == "+"){
          var r = parseInt(n) + 1
        } else{
          if(n == 1)
            return;
          var r = parseInt(n) - 1
        }
        $('input.quantity').val(r);
      });

    $('#ishi-product-accessories.owl-carousel').owlCarousel({
        loop:false,
        rewind:true,
        nav:true,
        dots:false,
        autoplay:true,
        navText: ["<i class='material-icons'></i>","<i class='material-icons'></i>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    }); 

    $('#ishi-left-right-product-accessories.owl-carousel').owlCarousel({
        loop:false,
        rewind:true,
        nav:true,
        dots:false,
        autoplay:true,
        navText: ["<i class='material-icons'></i>","<i class='material-icons'></i>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{  
                items:3
            }
        }
    }); 

    $('.qv-carousel').owlCarousel({
        nav:true,
        margin: 15,
        loop: false,
        rewind: true,
        navText: ["<i class='material-icons'></i>","<i class='material-icons'></i>"],
        responsive:{
            0:{
                items:3
            },
            576:{
                items:4
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });

    $('#ishislider.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        animateOut: 'fadeOut',
        autoplayTimeout:5000,
        navText: ["<i class='material-icons'></i>","<i class='material-icons'></i>"],
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('#manufacturer-carousel').owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        navText: ["<i class='material-icons'></i>","<i class='material-icons'></i>"],
        responsive:{
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });

    $('#ishispecialproducts-carousel').owlCarousel({
        loop:false,
        rewind:true,
        nav:true,
        dots:false,
        autoplay:true,
        navText: ["<i class='material-icons'></i>","<i class='material-icons'></i>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    $('#ishitestimonials-carousel').owlCarousel({
       loop:false,
       rewind:true,
       margin:30,
       nav:true,
       dot:false,
       autoplayTimeout:4000,
       autoplay:0,
       navText: ["<i class='material-icons'></i>","<i class='material-icons'></i>"],
       responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

    $('#smartblog-carousel').owlCarousel({
       loop:false,
       nav: true,
       rewind: true,
       dots:false,
       navText: ["<i class='material-icons'></i>","<i class='material-icons'></i>"],
       autoplay:false, 
       responsive:{
         0:{
           items:1
         },
         576:{
           items:1
         },
         768:{
           items:2
         },
         992:{
           items:2
         },
         1200:{
           items:3
         },
         1600:{
           items:3
         }
       }
    });   
});

jQuery(document).ready(function ($) {
var userFeed = new Instafeed({
    get: 'user',
    target: "ishiinstagram-carousel",
    userId: '6827780227',
    accessToken: 'IGQVJXeVFJVlR5SXd6WHFGQXFGWG9MYzg5bXNobkt4OUtoSjYtdU5lS0l2MktjQXVINS13dzBMa29QMk5rdlJKV2w2a1l0UjZAaQ3RkNmY5UUJkT1M1VjlNYXdfUEpMN0hQY0U1WGdrVG9LZADUtd3dZAVAZDZD',
    resolution: 'standard_resolution',
    sortBy: 'random',
    template:'<div class="item"><a href={{link}} id={{id}}><img src={{image}} /><div class="image-overlay"><span></span></div><span class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></span></a><div class="text-container"><span class="likes"><span class="likes-count">{{likes}}</span><i class="fa fa-heart" aria-hidden="true"></i></span><span class="comments"><span class="comments-count">{{comments}}</span><i class="fa fa-comments" aria-hidden="true"></i></span></div></div>',
    links: false,
    after: function(){
        $('#ishiinstagram-carousel.owl-carousel').owlCarousel({
            loop:true,
            dots:false,
            nav:false,
            autoplay:true,
            autoplayTimeout:5000,
            smartSpeed: 2500,
            rtl: $('html').attr('dir') == 'rtl'? true : false,
            responsive:{
                0:{
                    items:1
                },
                376:{
                    items:2
                },
                576:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:4
                },
                1200: {
                    items:6
                }
            }
        });
        insertDummyData();
    }
});
if($('#ishiinstagram-carousel').length) {
    userFeed.run();
}
});

function insertDummyData() {

    $("#ishiinstagram-carousel .owl-item").each(function(){
    $(this).find(".comments-count").text(niceNumberDisplay(Math.floor((Math.random() * 10000) + 1)));
    $(this).find(".likes-count").text(niceNumberDisplay(Math.floor((Math.random() * 100000) + 1)));
    });
}
function niceNumberDisplay(num) {
    var n = parseFloat(num);
    if(n > 1000000) {
        return Math.round(n / 1000000) + 'm';
    } else if(n > 1000) {
        return Math.round(n / 1000) + 'k';
    } else {
        return n.toFixed(0);
    }
}

function adjustTopMenu() {
    if (window.matchMedia('(min-width: 992px)').matches) {
    	$('#_desktop_top_menu #top-menu > li').each(function( index ) {
    	  var li = $(this).find('.sub-menu > ul > li').length;
    	  switch(li) {
    	  	case 1 : $(this).find('.sub-menu').css('width','230px');
    	  	break;
    	  	case 2 : $(this).find('.sub-menu').css('width','410px');
    	  	break;
    	  	default : $(this).find('.sub-menu').css('width','600px');
    	  }
        });
    }
}

function convertToMobile(){ 
    $("*[id^='_desktop_']").each(function(index, element) {
        var target = $('#' + element.id.replace('_desktop_', '_mobile_'));
        swapElements($(this), target);
    });
}


function convertToDesktop(){
    $("*[id^='_mobile_']").each(function(index, element) {
        var target = $('#' + element.id.replace('_mobile_', '_desktop_'));
        swapElements($(this), target);
    });
}


function swapElements(source, destination) {
  destination.html(source.html());
  source.html('');
}

function swapChildren(obj1, obj2) {
    var temp = obj2.children().detach();
    obj2.empty().append(obj1.children().detach());
    obj1.append(temp);
}
    
function toggleMobileStyles() {
    if (opencart_responsive_mobile) {
        $("*[id^='_desktop_']").each(function (idx, el) {
            var target = $('#' + el.id.replace('_desktop_', '_mobile_'));
            if (target.length) {
                swapChildren($(el), target);
            }
        });
    } else {
        $("*[id^='_mobile_']").each(function (idx, el) {
            var target = $('#' + el.id.replace('_mobile_', '_desktop_'));
            if (target.length) {
                swapChildren($(el), target);
            }
        });
    }
}
