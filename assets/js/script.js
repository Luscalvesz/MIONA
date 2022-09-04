

function createCats() {
    let mingau = JSON.parse(localStorage.getItem('gatitos1'));
    let fiona = JSON.parse(localStorage.getItem('gatitos2'));
    let gatos = JSON.parse(localStorage.getItem('gatitos3'));
    let createdCat = []
    
    // console.log('mingau: ', mingau);
    // console.log('fiona: ', fiona);
    // console.log('gatos: ', gatos);


    if ($("body").hasClass("bruno")) {
        createdCat = mingau
    }else if ($("body").hasClass("mione")) {
        createdCat = fiona
    }else if ($("body").hasClass("gatos")) {
        createdCat = gatos
    }else{
    }

    // console.log("gato sele", createdCat);

    createdCat.forEach(element => {
        $("#gatoBox").append(`<li class="gato-item"><img src="${element.catImg}" alt="Nome do gato: ${element.catname}"></li>`)
        $("#gatoNav").append(`<li class="gato-item"><img src="${element.catImg}" alt="Nome do gato: ${element.catname}"></li>`)
        console.log("gatooooo", element);
    });
}

function slider() {
    $('#gatoBox').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '#gatoNav'
    });
    $('#gatoNav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#gatoBox',
        dots: true,
        centerMode: true,
        focusOnSelect: true
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
    createCats();
    setTimeout(() => {
        slider();
    }, 200);
});