$(function () {

    // Sticky smaller header on scroll effect (reduce shadow already set by position:sticky)
    var $header = $('header');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 30) {
            $header.addClass('scrolled');
            $('.header-inner').css({ 'transform': 'translateY(-2px)', 'box-shadow': '0 12px 28px rgba(20,20,20,0.08)' });
        } else {
            $header.removeClass('scrolled');
            $('.header-inner').css({ 'transform': 'translateY(0)', 'box-shadow': '0 6px 20px rgba(20,20,20,0.06)' });
        }
    });

    // Smooth scroll for CTA links
    $('a[href^="#"]').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html,body').animate({ scrollTop: target.offset().top - 20 }, 600);
        }
    });

    // reveal elements on scroll
    function revealOnScroll() {
        $('.timeline-item, .card, .mini-slide, .story-image, .why h4').each(function () {
            var top = $(this).offset().top;
            var win = $(window).scrollTop() + $(window).height();
            if (win > top + 50) {
                $(this).css({ transform: 'translateY(0)', opacity: 1 });
            } else {
                $(this).css({ transform: 'translateY(24px)', opacity: .0 });
            }
        });
    }
    // set initial
    $('.timeline-item, .card, .mini-slide, .story-image, .why h4').css({ transform: 'translateY(24px)', opacity: 0, transition: 'all 600ms ease' });
    revealOnScroll();
    $(window).on('scroll resize', revealOnScroll);

    // position timeline nodes dynamically based on items
    (function positionTimeline() {
        var $line = $('#timelineLine');
        var height = $line.height();
        var nodes = [
            { year: '1980', pos: 0.12 },
            { year: '1995', pos: 0.44 },
            { year: '2000', pos: 0.75 }
        ];
        $.each(nodes, function (i, node) {
            var $n = $('<div class="timeline-node" data-year="' + node.year + '"></div>');
            $n.css('top', Math.round(height * node.pos) + 'px');
            $line.append($n);
        });
    })();

    // basic "why" carousel responsiveness (just horizontal scroll on small screens)
    // no extra JS needed

    // contact submit demo
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        alert('Cảm ơn! Mẫu liên hệ đã được gửi (demo). Bạn thay phần này bằng AJAX / API gửi về server.');
        $(this).trigger('reset');
    });




});


$(document).ready(function () {
    $(".cat-title").click(function () {
        $(this).next(".cat-sub").slideToggle();
        $(this).find(".cat-arrow").toggleClass("rotate");
    });

    // Menu toggle
    $('.hamburger').on('click', function () {
        $('.mobile-menu').toggleClass('open');
        $('.overlay').fadeToggle(200);
    });

    // Click overlay to close
    $('.overlay').on('click', function () {
        $('.mobile-menu').removeClass('open');
        $(this).fadeOut(200);
    });
});
