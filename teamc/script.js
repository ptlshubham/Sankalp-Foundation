(function ($) {
    'use strict';
    // Sticky Menu
    $(window).scroll(function () {
        if ($('header').offset().top > 10) {
            $('.top-header').addClass('hide');
            $('.navigation').addClass('nav-bg');
        } else {
            $('.top-header').removeClass('hide');
            $('.navigation').removeClass('nav-bg');
        }
    });
    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });
    //Hero Slider
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 7500,
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        arrows: true,
        fade: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
        dots: true
    });
    $('.hero-slider').slickAnimation();
    // venobox popup
    $(document).ready(function(){
        $('.venobox').venobox();
    });
    // mixitup filter
    var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
    var mixer;
    if (containerEl) {
        mixer = mixitup(containerEl, {
            selectors: {
                target: '[data-ref~="mixitup-target"]'
            }
        });
    }
    //  Count Up
    function counter() {
        var oTop;
        if ($('.count').length !== 0) {
            oTop = $('.count').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }
    $(window).on('scroll', function () {
        counter();
    });
})(jQuery);


(function($) {
    $.fn.shorten = function (settings) {
        var config = {
            showChars: 100,
            ellipsesText: "...",
            moreText: "more",
            lessText: "less"
        };
        if (settings) {
            $.extend(config, settings);
        }
        $(document).off("click", '.morelink');
        $(document).on({click: function () {
            var $this = $(this);
            if ($this.hasClass('less')) {
                $this.removeClass('less');
                $this.html(config.moreText);
            } else {
                $this.addClass('less');
                $this.html(config.lessText);
            }
            $this.parent().prev().toggle();
            $this.prev().toggle();
            return false;
        }
    }, '.morelink');
        return this.each(function () {
            var $this = $(this);
            if($this.hasClass("shortened")) return;
            $this.addClass("shortened");
            var content = $this.html();
            if (content.length > config.showChars) {
                var c = content.substr(0, config.showChars);
                var h = content.substr(config.showChars, content.length - config.showChars);
                var html = c + '<span class="moreellipses">' + config.ellipsesText + ' </span><span class="morecontent"><span>' + h + '</span> <a href="#" class="morelink">' + config.moreText + '</a></span>';
                $this.html(html);
                $(".morecontent span").hide();
            }
        });
    };
})(jQuery);



$(".more").shorten({
    "showChars" : 90,
    "moreText"  : "Read More",
    "lessText"  : "Read Less",
});
