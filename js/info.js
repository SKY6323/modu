/* floor 탭 */
$('.btn_floor > ul > li').on('click', function(e){
    e.preventDefault();

    $(this).addClass('on')
    $(this).siblings().removeClass('on')

    let index = $(this).index();
    let floorL = $(this).parents('ul').parents('.btn_floor').siblings('.floor_list').children('li').eq(index)

    floorL.addClass('on')
    floorL.siblings().removeClass('on')
})

/* 고대비 */
$('#color').on('click', function(){
    $('section + section').toggleClass('color')
    $('.business_area > div .title_box').toggleClass('color')
})