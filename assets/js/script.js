

function carrossel() {
    $('#carrossel').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
}

function menuSlideIn() {
    $('#logoName').addClass("e-active")
}
function menuSlideOut() {
    $('#logoName').removeClass('e-active')
}
function showMenu() {
    $('#mobNav').toggleClass('is--active')
}
$(document).ready(function () {
    carrossel();
    
});