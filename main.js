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

    // Ẩn ban đầu
    $(".timeline-item.hidden").hide();

    // Mỗi lần nhấn, hiển thị thêm 3 mốc (hoặc ít hơn nếu còn ít)
    $(".btn-more").on("click", function(e) {
        e.preventDefault();

        let $hiddenItems = $(".timeline-item.hidden:hidden");
        $hiddenItems.slice(0, 3).slideDown(400); // hiện dần 3 mốc

        // Khi không còn mốc ẩn thì ẩn nút
        if ($hiddenItems.length <= 3) {
            $(this).fadeOut();
        }
    });

    // Mở popup
    $("#contactBtn").click(function(){
        $("#contactPopup").fadeIn(300).css("display", "flex");
    });

    // Đóng popup
    $(".popup-close, .popup-overlay").click(function(e){
        if($(e.target).is(".popup-overlay, .popup-close")){
            $("#contactPopup").fadeOut(300);
        }
    });

    var owl = $("#whyCards");
    owl.owlCarousel({
        loop: true,              // Cho phép lặp vô tận
        margin: 70,              // Khoảng cách giữa các card
        center: true,
        dots: true,             // Bỏ nút tròn
        autoplay: false,          // Tự động chạy
        autoplayTimeout: 5000,   // 4 giây chuyển slide
        smartSpeed: 1000,         // Tốc độ chuyển slide
        responsive: {
            0: {
                items: 1             // Mobile: 1 card
            },
            768: {
                items: 2             // Tablet: 2 card
            },
            1024: {
                items: 3             // Desktop: 3 card
            }
        },
    });

    $(".mini-carousel").owlCarousel({
        loop: false,              // Cho phép lặp vô tận
        margin: 8,              // Khoảng cách giữa các card
        dots: true,             // Bỏ nút tròn
        autoplay: false,          // Tự động chạy
        autoplayTimeout: 5000,   // 4 giây chuyển slide
        smartSpeed: 1000,         // Tốc độ chuyển slide
        responsive: {
            0: {
                items: 1             // Mobile: 1 card
            },
            768: {
                items: 2             // Tablet: 2 card
            },
            1024: {
                items: 4             // Desktop: 3 card
            }
        },
    });

    $(".cert").owlCarousel({
        loop: false,              // Cho phép lặp vô tận
        margin: 8,              // Khoảng cách giữa các card
        dots: true,             // Bỏ nút tròn
        autoplay: false,          // Tự động chạy
        autoplayTimeout: 5000,   // 4 giây chuyển slide
        smartSpeed: 1000,         // Tốc độ chuyển slide
        responsive: {
            0: {
                items: 2            // Mobile: 1 card
            },
            768: {
                items: 2             // Tablet: 2 card
            },
            1024: {
                items: 4             // Desktop: 3 card
            }
        },
    });

    $(".related_pr").owlCarousel({
        loop: true,              // Cho phép lặp vô tận
        margin: 20,              // Khoảng cách giữa các card
        center: true,
        dots: true,             // Bỏ nút tròn
        autoplay: false,          // Tự động chạy
        autoplayTimeout: 5000,   // 4 giây chuyển slide
        smartSpeed: 1000,         // Tốc độ chuyển slide
        responsive: {
            0: {
                items: 2            // Mobile: 1 card
            },
            768: {
                items: 2             // Tablet: 2 card
            },
            1024: {
                items: 3             // Desktop: 3 card
            }
        },
    });

    $(".news-side.detail").owlCarousel({
        loop: false,              // Cho phép lặp vô tận
        margin: 20,              // Khoảng cách giữa các card
        dots: true,             // Bỏ nút tròn
        autoplay: false,          // Tự động chạy
        autoplayTimeout: 5000,   // 4 giây chuyển slide
        smartSpeed: 1000,         // Tốc độ chuyển slide
        responsive: {
            0: {
                items: 2            // Mobile: 1 card
            },
            768: {
                items: 2             // Tablet: 2 card
            },
            1024: {
                items: 3             // Desktop: 3 card
            }
        },
    });


});
