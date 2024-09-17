document.addEventListener('DOMContentLoaded', () => {

    const slider = document.getElementById("slider");
    const slides = document.querySelectorAll('.img-text');
    const txt = document.querySelectorAll('.txt');
    const sliderTxt = document.getElementById("slider-txt");
    const controls= document.querySelectorAll('.desktop-round');
    const controls2 = document.querySelectorAll('.desktop-control');
    const sliderWidth = slider.clientWidth;
    const sliderTxtWidth = sliderTxt.clientWidth;
    let currentSlideIndex = 0;

    function addPagination() {
        controls[0].classList.add('active');
        controls.forEach((circle, index) => {
            circle.addEventListener('click', () => changeSlide(index));
            circle.addEventListener('click', () => changeTxt(index));
        });
        controls2.forEach((circle, index) => {
            circle.addEventListener('click', () => changeSlide(index));
            circle.addEventListener('click', () => changeTxt(index));
        });
    }

    function changeSlide(slideIndex) {
        removeActiveClass();
        currentSlideIndex = slideIndex;
        addActiveClass();
        showSlide();
    }

    function changeTxt(slideIndex) {
        currentSlideIndex = slideIndex;
        showTxt();
    }

    function removeActiveClass() {
        controls[currentSlideIndex].classList.remove('active');
    }

    function addActiveClass() {
        controls[currentSlideIndex].classList.add('active');
    }

    function showSlide() {
        slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
    }

    function showTxt() {
        sliderTxt.style.transform = `translateX(-${currentSlideIndex * sliderTxtWidth}px)`;
    }

    addPagination();




    //*****for mobile*****//
    const sliderMobile = document.getElementById("slider-mobile");
    const slidesMobile = document.querySelectorAll('.img-text-mobile');
    const txtMobile = document.querySelectorAll('.txt-mobile');
    const sliderTxtMobile = document.getElementById("slider-txt-mobile");
    const controlsMobile= document.querySelectorAll('.mobile-round');
    const controls2Mobile = document.querySelectorAll('.mobile-control');
    const sliderWidthMobile = sliderMobile.clientWidth;
    const sliderTxtWidthMobile = sliderTxtMobile.clientWidth;

    function addPaginationMobile() {
        controlsMobile[0].classList.add('active');
        controlsMobile.forEach((circle, index) => {
            circle.addEventListener('click', () => changeSlideMobile(index));
            circle.addEventListener('click', () => changeTxtMobile(index));
        });
        controls2Mobile.forEach((circle, index) => {
            circle.addEventListener('click', () => changeSlideMobile(index));
            circle.addEventListener('click', () => changeTxtMobile(index));
        });
    }

    function changeSlideMobile(slideIndex) {
        removeActiveClass();
        currentSlideIndex = slideIndex;
        addActiveClass();
        showSlideMobile();
    }

    function changeTxtMobile(slideIndex) {
        currentSlideIndex = slideIndex;
        showTxtMobile();
    }

    function removeActiveClass() {
        controlsMobile[currentSlideIndex].classList.remove('active');
    }

    function addActiveClass() {
        controlsMobile[currentSlideIndex].classList.add('active');
    }

    function showSlideMobile() {
        sliderMobile.style.transform = `translateX(-${currentSlideIndex * sliderWidthMobile}px)`;
    }

    function showTxtMobile() {
        sliderTxtMobile.style.transform = `translateX(-${currentSlideIndex * sliderTxtWidthMobile}px)`;
    }

    addPaginationMobile();




});