'use strict';

var select = document.querySelectorAll('.filter>button');

function selectEvent() {
    select.forEach(function (select) {
        select.addEventListener('click', function () {
            filter();
            isActive();
        });
    });
}
function filter() {
    var el = event.target;
    var optionType = el.getAttribute('data-type');
    var galleryItem = document.querySelectorAll('.lightgallery_item');
    galleryItem.forEach(function (el) {
        var type = el.getAttribute('data-type');
        el.style.display = 'block';
        if (type != optionType && optionType != 'all') {
            el.style.display = 'none';
        }
    });
}
function isActive() {
    var el = event.target;
    select.forEach(function (select) {
        select.classList.remove('active');
    });
    el.classList.add('active');
}
selectEvent();
// function include(scriptUrl) {
//     document.write('<script src="' + scriptUrl + '"></script>');
// }

/* Easing library
 ========================================================*/
// include('js/');
window.$ = window.jQuery = $;

$(document).ready(function () {

    /* Slick Slider
     ========================================================*/
    $('.slider-one').slick({
        dots: true,
        customPaging: function customPaging(slider) {
            return '<span class="dot"></span>';
        },
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '',
        nextArrow: '',
        mobileFirst: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>'
            }
        }]
    });
    // $slickSlider.find(".slider-posts").height("auto");
    // $slickSlider.slickSetOption(null, null, true);
    $('.slider-posts').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        mobileFirst: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    /* Light Gallery
      ========================================================*/
    $('#lightgallery').lightGallery({
        mode: 'lg-fade',
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        thumbnail: true
    });
});

$(document).ready(function () {
    var readMoreBtn = document.getElementsByClassName('read-more');
    var more = document.getElementsByClassName('more');

    Array.from(readMoreBtn).forEach(function (el) {
        el.innerText = "Read More";
        el.addEventListener('click', readMore);
    });
    Array.from(more).forEach(function (el) {
        el.style.display = "none";
    });
    function readMore(event) {
        if (!event) {
            event = window.event;
        }
        var target = event.currentTarget;
        var parent = target.parentNode;
        var currentMoreText = parent.querySelector('*>.more');
        var currentReadMoreBtn = parent.querySelector('.read-more');

        if (currentMoreText.style.display == 'none') {
            currentReadMoreBtn.innerText = "Read Less";
            currentMoreText.style.display = 'inline';
        } else {
            currentReadMoreBtn.innerText = "Read More";
            currentMoreText.style.display = 'none';
        }
    }
});
//# sourceMappingURL=script-babel.js.map
