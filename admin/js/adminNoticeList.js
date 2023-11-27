
//공지게시판
$(document).ready(function() {
    $('.admin-notice-lists > div').each(function() {
        var $toggle = $(this).children('div')

        $toggle.click(function() {
         
            let $dd = $(this).parents('div').siblings('div').children('div').next('section')
           
            $dd.stop().slideToggle(400);

          
            // 다른 항목의 div를 닫기
            $(this).parents('div').children('div').siblings('div').find('section')
            .children('section')
                .slideUp(400);
        });
    });
});