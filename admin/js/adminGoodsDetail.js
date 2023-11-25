$('.modify-btn').on('click', function(){
    window.location.href="/admin/html/adminGoodsModify.html";
})


$(document).ready(function(){
    $('.goods-related-info-title').on('click', function(){

        let add = $('.goods-related-q-container');
        add.stop().slideToggle(400);

    })
})




