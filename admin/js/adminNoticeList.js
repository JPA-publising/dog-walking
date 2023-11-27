
//공지게시판
$(document).ready(function() {
    $('.admin-notice-lists').each(function() {
        let $toggle = $(this).find('.rr');

        $toggle.click(function() {
            let $currentSection = $(this).next('.notice-content');

            // 현재 항목 열고/닫기
            $currentSection.stop().slideToggle(400);
            // 다른 항목 닫기
            $(this).parent().siblings().find('.notice-content').slideUp(400);
        });
    });
});

$(document).ready(function(){
    $('.rr').on('click', function(){

        let $currentSection = $(this).children('.row')
        $currentSection.toggleClass('active');


        $(this).parent().siblings().find('.row').removeClass('active');

    })
})

