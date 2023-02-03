/*-----------------------------------------------------------------------------------

    Theme Name: Fabrex - Health and Yoga HTML Template
    Description: Health and Yoga HTML Template
    Author: Chitrakoot Web
            
    ---------------------------------- */    

!function(t){"use strict";var o=t(window);function a(){var e,a;e=t(".full-screen"),a=o.height(),e.css("min-height",a),e=t("header").height(),a=t(".screen-height"),e=o.height()-e,a.css("height",e)}t("#preloader").fadeOut("normall",function(){t(this).remove()}),o.on("scroll",function(){var e=o.scrollTop(),a=t(".navbar-brand.logowhite img");e<=50?t("header").removeClass("scrollHeader").addClass("fixedHeader"):t("header").removeClass("fixedHeader").addClass("scrollHeader"),a.attr("src","img/logos/logo.png")}),o.on("scroll",function(){500<t(this).scrollTop()?t(".scroll-to-top").fadeIn(400):t(".scroll-to-top").fadeOut(400)}),t(".scroll-to-top").on("click",function(e){e.preventDefault(),t("html, body").animate({scrollTop:0},600)}),t(".parallax,.bg-img").each(function(e){t(this).attr("data-background")&&t(this).css("background-image","url("+t(this).data("background")+")")}),t(".story-video").magnificPopup({delegate:".video",type:"iframe"}),o.resize(function(e){setTimeout(function(){a()},500),e.preventDefault()}),a(),t(document).ready(function(){t(".testimonial-carousel1").owlCarousel({loop:!0,responsiveClass:!0,nav:!0,navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],dots:!1,margin:0,autoplay:!0,thumbs:!0,thumbsPrerendered:!0,autoplayTimeout:5e3,smartSpeed:800,responsive:{0:{items:1,nav:!1},600:{items:1,nav:!1},1e3:{items:1}}}),t(".testimonial-carousel").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,smartSpeed:1500,nav:!1,dots:!1,center:!1,margin:30,responsive:{0:{items:1},768:{items:1},992:{items:2}}}),t(".slider-fade .owl-carousel").owlCarousel({items:1,loop:!0,dots:!1,margin:0,nav:!0,navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],autoplay:!0,smartSpeed:500,mouseDrag:!1,animateIn:"fadeIn",animateOut:"fadeOut",responsive:{0:{nav:!1},768:{nav:!0}}}),t(".owl-carousel").owlCarousel({items:1,loop:!0,dots:!1,margin:0,autoplay:!0,smartSpeed:500}),t(".slider-fade").on("changed.owl.carousel",function(e){e=e.item.index-2;t("span").removeClass("animated fadeInRight"),t("h1").removeClass("animated fadeInRight"),t("p").removeClass("animated fadeInRight"),t(".butn").removeClass("animated fadeInRight"),t(".owl-item").not(".cloned").eq(e).find("span").addClass("animated fadeInRight"),t(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInRight"),t(".owl-item").not(".cloned").eq(e).find("p").addClass("animated fadeInRight"),t(".owl-item").not(".cloned").eq(e).find(".butn").addClass("animated fadeInRight")}),t(".countup").counterUp({delay:25,time:2e3}),t(".current-year").text((new Date).getFullYear())}),o.on("load",function(){t(".portfolio-gallery").lightGallery(),o.stellar()})}(jQuery);