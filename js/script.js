$(document).ready(function(){
  $('.carousel__iner').slick({
    infinite: true,
    speed: 300,
    /* adaptiveHeight: true, */
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true
            }
        }
    ]
  });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__contant').removeClass('catalog__contant_active').eq($(this).index()).addClass('catalog__contant_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__contant').eq(i).toggleClass('catalog-item__contant_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut();
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
       }) 
    });

    function validateForms(form) {
        $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, введите свое имя",
            phone: "Пожалуйста, введите свой телефон",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес"
            }
        }
    });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    
    $('input[name=phone]').mask("+38 (098) 56-56-099");
});