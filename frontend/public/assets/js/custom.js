
(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


  // Acc
    $(document).on("click", ".naccs .menu div", function() {
      var numberIndex = $(this).index();

      if (!$(this).is("active")) {
          $(".naccs .menu div").removeClass("active");
          $(".naccs ul li").removeClass("active");

          $(this).addClass("active");
          $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

          var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
          $(".naccs ul").height(listItemHeight + "px");
        }
    });


	$('.owl-listing').owlCarousel({
		items:1,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			  },
			  1600:{
				  items:1
			  }
		  }
	})
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	




})(window.jQuery);







/*=============================================================
    Authour URI: www.binarycart.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
            METIS MENU 
            ======================================*/
            $('#main-menu').metisMenu();

            /*====================================
              LOAD APPROPRIATE MENU BAR
           ======================================*/
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });

            /*====================================
            MORRIS BAR CHART
         ======================================*/
            Morris.Bar({
                element: 'morris-bar-chart',
                data: [{
                    y: '2006',
                    a: 100,
                    b: 90
                }, {
                    y: '2007',
                    a: 75,
                    b: 65
                }, {
                    y: '2008',
                    a: 50,
                    b: 40
                }, {
                    y: '2009',
                    a: 75,
                    b: 65
                }, {
                    y: '2010',
                    a: 50,
                    b: 40
                }, {
                    y: '2011',
                    a: 75,
                    b: 65
                }, {
                    y: '2012',
                    a: 100,
                    b: 90
                }],
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                hideHover: 'auto',
                resize: true
            });

            /*====================================
          MORRIS DONUT CHART
       ======================================*/
            Morris.Donut({
                element: 'morris-donut-chart',
                data: [{
                    label: "Download Sales",
                    value: 12
                }, {
                    label: "In-Store Sales",
                    value: 30
                }, {
                    label: "Mail-Order Sales",
                    value: 20
                }],
                resize: true
            });

            /*====================================
         MORRIS AREA CHART
      ======================================*/

            Morris.Area({
                element: 'morris-area-chart',
                data: [{
                    period: '2010 Q1',
                    iphone: 2666,
                    ipad: null,
                    itouch: 2647
                }, {
                    period: '2010 Q2',
                    iphone: 2778,
                    ipad: 2294,
                    itouch: 2441
                }, {
                    period: '2010 Q3',
                    iphone: 4912,
                    ipad: 1969,
                    itouch: 2501
                }, {
                    period: '2010 Q4',
                    iphone: 3767,
                    ipad: 3597,
                    itouch: 5689
                }, {
                    period: '2011 Q1',
                    iphone: 6810,
                    ipad: 1914,
                    itouch: 2293
                }, {
                    period: '2011 Q2',
                    iphone: 5670,
                    ipad: 4293,
                    itouch: 1881
                }, {
                    period: '2011 Q3',
                    iphone: 4820,
                    ipad: 3795,
                    itouch: 1588
                }, {
                    period: '2011 Q4',
                    iphone: 15073,
                    ipad: 5967,
                    itouch: 5175
                }, {
                    period: '2012 Q1',
                    iphone: 10687,
                    ipad: 4460,
                    itouch: 2028
                }, {
                    period: '2012 Q2',
                    iphone: 8432,
                    ipad: 5713,
                    itouch: 1791
                }],
                xkey: 'period',
                ykeys: ['iphone', 'ipad', 'itouch'],
                labels: ['iPhone', 'iPad', 'iPod Touch'],
                pointSize: 2,
                hideHover: 'auto',
                resize: true
            });

            /*====================================
    MORRIS LINE CHART
 ======================================*/
            Morris.Line({
                element: 'morris-line-chart',
                data: [{
                    y: '2006',
                    a: 100,
                    b: 90
                }, {
                    y: '2007',
                    a: 75,
                    b: 65
                }, {
                    y: '2008',
                    a: 50,
                    b: 40
                }, {
                    y: '2009',
                    a: 75,
                    b: 65
                }, {
                    y: '2010',
                    a: 50,
                    b: 40
                }, {
                    y: '2011',
                    a: 75,
                    b: 65
                }, {
                    y: '2012',
                    a: 100,
                    b: 90
                }],
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                hideHover: 'auto',
                resize: true
            });
           
     
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));
