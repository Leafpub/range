$(function() {
    'use strict';

    // Toggle menu with buttons
    $('.nav-toggle').on('click', function(event) {
        event.preventDefault();
        $('html').toggleClass('nav-open');
    });

    // Close menu when clicking outside it
    $(document).on('click touchstart', function(event) {
        if(!$(event.target).parents().addBack().is('.nav-toggle, .nav')) {
            $('html').removeClass('nav-open');
        }
    });

    // Close menu when pressing ESC
    $(document).on('keydown', function(event) {
        if(event.keyCode === 27 && $('html').is('.nav-open')) {
            $('html').removeClass('nav-open');
        }
    });

    // Continue link
    $('a[href="#continue"]').on('click', function(event) {
        event.preventDefault();

        // Scroll out of the cover
        $('body').animate({
            scrollTop: $(window).height()
        }, 1000);
    });

    // Open share links in new window
    $('.post-share-icon').on('click', function(event) {
        event.preventDefault();
        // Only open if we're not in the editor
        if(!window.leafpub) {
            window.open($(this).attr('href'), 'share', 'width=550,height=285');
        }
    });
});