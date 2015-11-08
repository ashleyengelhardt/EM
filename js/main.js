/*
$(document).ready(function(){
    
});
*/

function resetForm() {
    $('input.email').removeClass('thank-you-text');
    $('input.email').prop('placeholder', 'Enter your email address');
}

function changeButton() {
    $('input.email').prop('value', '');
    $('input.email').addClass('thank-you-text');
    $('input.email').prop('placeholder', 'Thank you!');
    setTimeout(resetForm, 1500);
}

// sticky footer
/*
$(window).bind("load", function () {
    var footer = $("footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});
*/