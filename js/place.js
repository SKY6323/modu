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

/* slide */
$(function(){
    $('.slide1 a').on('click', function(){
        $(this).parents('li').addClass('on')
        $(this).parents('li').siblings().removeClass('on')
        $('.slide_B1 img').before("<img src='" + $(this).attr('href') + "'>")
        $('.slide_B1 img:last').fadeOut('fast', function(){
            $(this).remove();
        })
        return false
    })
})
$(function(){
    $('.slide2 a').on('click', function(){
        $(this).parents('li').addClass('on')
        $(this).parents('li').siblings().removeClass('on')
        $('.slide_B2 img').before("<img src='" + $(this).attr('href') + "'>")
        $('.slide_B2 img:last').fadeOut('fast', function(){
            $(this).remove();
        })
        return false
    })
})

/* vr */
$('.view_vr > button').on('click', function(){
    alert('준비중 입니다.')
})

/* 고대비 */
$('#color').on('click', function(){
    $('.reserve_nav li').toggleClass('color')
    $('.cont_area').toggleClass('color')
    $('.Rlist_01 .seat_list').toggleClass('color')
})