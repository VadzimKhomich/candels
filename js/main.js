const menuBtn = document.querySelector('.menu__btn')
const menuMobile = document.querySelector('.header__menu-list')
menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open')
})

const swiperOne = new Swiper('.feedback__slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },

});

const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        }
    }
});

const accardeon = document.querySelector('.accordeon')
const accordeonTitles = accardeon.querySelectorAll('.accordeon__title')

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
    accordeonTitle.addEventListener('click', function () {
        const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text')
        accordeonTitle.classList.toggle('accordeon__title--active')
        currentText.classList.toggle('accordeon__text--visible')

        if (currentText.classList.contains('accordeon__text--visible')) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px'

        } else {
            currentText.style.maxHeight = null
        }
    })
})