$(document).ready(function(){
    /*메인 슬라이더*/
    $('.subSliderWrap').bxSlider({
    });
    /*우측 세로 슬라이더*/
    $('.TWlist').bxSlider({
        mode: 'vertical',
        auto: true,
        autoControls: false,
        controls:false,
        minSlides: 5,
        moveSlides:1,
        nextSelector:'#slider-next',
        prevSelector:'#slider-prev'
    });
});