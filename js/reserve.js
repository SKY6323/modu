/* 탭기능 */
$('.reserve_nav > li').on('click', function(e){
    e.preventDefault();

    $(this).addClass('on')
    $(this).siblings().removeClass('on')

    let index = $(this).index();
    let reserveL = $(this).parents('.head_area').siblings('.reserve_list').children('li').eq(index);

    reserveL.addClass('on')
    reserveL.siblings().removeClass('on')
})

/* 고대비 */
$('#color').on('click', function(){
    $('.reserve_nav li').toggleClass('color')
    $('.cont').toggleClass('color')
    $('.way').toggleClass('color')
    $('.Rlist_02 .table_felx > .title_area > p').toggleClass('color')
    $('.Rlist_02 .table_felx > .table_area thead tr').toggleClass('color')
})