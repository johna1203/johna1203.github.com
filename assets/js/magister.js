// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 1300;
var section_show_time = 1300;

// jQuery stuff
jQuery(document).ready(function ($) {
    // Switch section
    $("a", '.mainmenu').click(function () {
        if (!$(this).hasClass('active')) {
            current_item = this;
            // close all visible divs with the class of .section
            $('.section:visible').fadeOut(section_hide_time, function () {
                $('a', '.mainmenu').removeClass('active');
                $(current_item).addClass('active');
                var new_section = $($(current_item).attr('href'));
                new_section.fadeIn(section_show_time);
            });
        }
        return false;
    });

    var count = 18;
    var nowcount = 1;

    var chageImage = function () {
        var imgPath = '/assets/images/' + nowcount + '.jpg';
        nowcount++;
        var el = $('.bgdiv');

        el.fadeOut('slow', function () {
            $('.bgdiv').css('backgroundImage', 'url(/assets/images/img' + nowcount + '.jpg)');
            el.fadeIn('slow');
        });


        if (nowcount > count) {
            nowcount = 1;
        }
        setTimeout(chageImage, 8000);
    };

    setTimeout(chageImage, 8000);


});