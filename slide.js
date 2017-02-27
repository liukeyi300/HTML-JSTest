/**
 * Created by Liukeyi on 2016/5/31.
 */
$(window).resize(function() {
    $('.scroll-container').css({
        marginTop: (0 - $('.scroll-container').height() / 2) + 'px'
    });
});

$(function() {
    $(window).resize();

    $('.tab-select').hover(function() {
        $(this).siblings('.tips-container').removeClass('hide').addClass('show');
    }, function() {
        $('.tips-container').each(function() {
            var tip = $(this);
            if (tip.hasClass('show')) {
                tip.removeClass('show').addClass('hide');
            }
        });
    });

    $('.tab-select').on('click', function(e) {
        $('.bordered').removeClass('bordered');
        $(this).addClass('bordered');
        $('.content>div').css("z-index", -3);

        var select = $(this).data('select');
        var target = $('.' + select);

        target.css("z-index", 1);
    });

    $(window).on('mousewheel', function(event, data) {
        alert(data);
    });

    $('.test-btn').on('click', function() {
        alert('None');
    });

    function fib(n) {
        if (n < 2) {
            return 1;
        }

        return fib(n - 1) + fib(n - 2);
    }


});

