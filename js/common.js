/* header */
$('.nav > li').on('click', function(){
    $('.nav > li > ul').addClass('on')
    $('.navS_bg').addClass('on')
    $('.menu_bg').addClass('on')
    $('.menu_bg').animate({
        opacity: 1
    })
})

$('.menu_close').on('click', function(e){
    e.preventDefault();
    
    $('.nav > li > ul').removeClass('on')
    $('.navS_bg').removeClass('on')
    $('.menu_bg').removeClass('on')
    $('.menu_bg').animate({
        opacity: 0
    })
})

/* 로그인 창 */
//로그인 창 뜨기
$('.login_menu').on('click',function(e){
    e.preventDefault();

    $('.login_bg').addClass('on')
    $('.lgoin_bg').addClass('on')
    $('.lgoin_bg').animate({
        opacity: 1
    })
})
//로그인 창 닫기
$('.login_close').on('click', function(){
    $('.login_bg').removeClass('on')
    $('.lgoin_bg').removeClass('on')
    $('.lgoin_bg').animate({
        opacity: 0
    })
})

//로그인 탭
$('.login_tap li').on('click', function(){
    let index = $(this).index();
    let cont = $(this).parents('.login_tap').siblings('.Ltap').eq(index)

    $(this).addClass('on');
    $(this).siblings().removeClass('on');

    cont.addClass('on');
    cont.siblings().removeClass('on')
})

//비밀번호 보이기 버튼
$('.pwd_icon').on('click',function(){
    $(this).toggleClass('on')
})

//체크박스
$('.id_login .check .checkbox_icon').on('click',function(){
    $(this).toggleClass('on')
})

/* 고대비 */
$('#color').on('click', function(){
    $(this).toggleClass('on')
    $('body').toggleClass('color')
    $('.bgfont').toggleClass('color')
    $('.nav_area .logo a').toggleClass('color')
    $('.gnb li').toggleClass('color')
    $('.search_area input').toggleClass('color')
    $('.btn_close .menu_icon .close').toggleClass('color')
    $('.login_area .login_tap li a').toggleClass('color')
    $('.id_login input').toggleClass('color')
    $('.id_login .check .checkbox_icon').toggleClass('color')
    $('footer').toggleClass('color')
    $('.f_right').toggleClass('color')
    $('.btn_top').toggleClass('color')

    if($(this).hasClass('on')){
        $(this).text('저대비')
    }else{
        $(this).text('고대비')
    }
})

/* 글자확대 */
$('#font').on('click', function(){
    $('body').toggleClass('zoom')

    if($('body').hasClass('zoom')){
        $('#font').text('글자축소')
    }else{
        $('#font').text('글자확대')
    }
})

/* 탑 버튼 등장 */
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>50){
            $('.btn_top').addClass('on')
        }else{
            $('.btn_top').removeClass('on')
        }
    })
})

/* 탑 버튼 작동 */
$('.btn_top').on('click', function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop:0
    },400);
    return false;
})

/* 장애인이용안내 이동 */
$('#useinfo_location').on('click', function(){
    location.href = 'useinfo.html'
})