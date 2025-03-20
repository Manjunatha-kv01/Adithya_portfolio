$(document).ready(function () {
    // ✅ Sticky Navbar on Scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // ✅ Show/Hide Scroll-Up Button
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // ✅ Scroll-Up Button Functionality
    $('.scroll-up-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    // ✅ Smooth Scroll for Menu Items
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // ✅ Toggle Navbar Menu on Mobile (Hamburger Menu)
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active"); // Show/Hide menu
        $('.menu-btn i').toggleClass("fa-times"); // Change icon to "X"
    });

    // ✅ Close Menu When Clicking a Menu Item (Mobile)
    $('.navbar .menu li a').click(function () {
        $('.navbar .menu').removeClass("active"); // Hide menu after clicking a link
        $('.menu-btn i').removeClass("fa-times"); // Reset icon to ☰
    });

    // ✅ Close Menu When Clicking Outside Navbar (Mobile)
    $(document).click(function (e) {
        if (!$(e.target).closest('.navbar').length && !$(e.target).closest('.menu-btn').length) {
            $('.navbar .menu').removeClass("active");
            $('.menu-btn i').removeClass("fa-times");
        }
    });

    // ✅ Ensure Menu Closes on Resize (Prevent Stuck Menu)
    $(window).resize(function () {
        if ($(window).width() > 1024) {
            $('.navbar .menu').removeClass("active");
            $('.menu-btn i').removeClass("fa-times");
        }
    });

    // ✅ Typing Text Animation
    var typed = new Typed(".typing", {
        strings: ["Supercharging Progress", "Finding Our Spark"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Finding our passion", "Supercharging our lifes"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // ✅ Owl Carousel Animation
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
