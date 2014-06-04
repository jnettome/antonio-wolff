'use strict';
$(function() {
    $('.img-responsive').on('click', function () {
        $('#image').html('<img class="img-responsive" src="'+$(this).attr('src')+'">');
        $('#image img').css('height', $(window).innerHeight() - 80);
    });

    $(window).on('resize load', function () {
        $('.follow').css('height', $(window).innerHeight());
    });
});
