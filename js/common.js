(Document).ready(function(){
    $('a.page-scroll').bind('click', function(event) {    
    //a 태그이면서 클래스가 page-scroll 객체를 클릭하면 
    var $anchor = $(this);
    $('html, body').stop().animate({
        //화면이 애니메이션 하겠다
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
        //클릭한 a태그의 href 속성에 들어가 있는 객체의 
        //상단위로 1250밀리초 스피드로 exeInOutExpo 타입을 움직이겠다.
        //easeInOutExpo 타입의 정의가 없어서 에러가 나므로 삭제한다.
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});