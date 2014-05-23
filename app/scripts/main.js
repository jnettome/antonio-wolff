'use strict';
$(function() {
    $('.img-responsive').on('click', function () {
        $('#image').html('<img class="img-responsive" src="'+$(this).attr('src')+'">');
    });
});
