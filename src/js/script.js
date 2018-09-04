// window.onload= function() {
    window.$ = window.jQuery = $;

    $(document).ready(function () {
        let select = document.querySelectorAll('.filter>button');

        function selectEvent() {
            select.forEach(select => {
                select.addEventListener('click', function () {
                    filter();
                    isActive();
                });
            });
        }

        function filter() {
            let el = event.target;
            let optionType = el.getAttribute('data-type');
            let galleryItem = document.querySelectorAll('.lightgallery_item');
            galleryItem.forEach(el => {
                let type = el.getAttribute('data-type');
                el.style.display = 'block';
                if ((type != optionType) && (optionType != 'all')) {
                    el.style.display = 'none';
                }
            });
        }

        function isActive() {
            let el = event.target;
            select.forEach(select => {
                select.classList.remove('active');
            });
            el.classList.add('active');
        }

        selectEvent();

        /* Easing library
         ========================================================*/

// window.$ = window.jQuery = $;
//
// $(document).ready(function () {

        /* Slick Slider
         ========================================================*/
        $('.slider-one').slick({
            dots: true,
            customPaging: function (slider) {
                return '<span class="dot"></span>';
            },
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '',
            nextArrow: '',
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        prevArrow: '<button type="button" class="slick-prev"></button>',
                        nextArrow: '<button type="button" class="slick-next"></button>'
                    }
                }
            ]
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
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
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
        let readMoreBtn = document.getElementsByClassName('read-more');
        let more = document.getElementsByClassName('more');

        Array.from(readMoreBtn).forEach(el => {
            el.innerText = "Read More";
            el.addEventListener('click', readMore);
        });
        Array.from(more).forEach(el => {
            el.style.display = "none";
        });

        function readMore(event) {
            if (!event) {
                event = window.event;
            }
            let target = event.currentTarget;
            let parent = target.parentNode;
            let currentMoreText = parent.querySelector('*>.more');
            let currentReadMoreBtn = parent.querySelector('.read-more');

            if (currentMoreText.style.display == 'none') {
                currentReadMoreBtn.innerText = "Read Less";
                currentMoreText.style.display = 'inline';
            }
            else {
                currentReadMoreBtn.innerText = "Read More";
                currentMoreText.style.display = 'none';
            }
        }
    });
// };
