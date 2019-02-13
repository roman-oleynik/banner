setTimeout(function () {
    $('.banner-text').css('opacity', '1')
}, 700);

$('.close').on('click', function() {
    let confirmClose = confirm("Do you really want to close this great banner?");
    confirmClose && $('.banner').css('display', 'none');
})