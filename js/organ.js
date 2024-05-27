$('#color').on('click', function(){
    $('.group_img > ul').toggleClass('color')
    $('.group_img > .position .division').toggleClass('color')
    $('.group_img > .position .division > li').toggleClass('color')
    $('.group_img > ul > li:nth-child(1) span').toggleClass('color')
    $('.group_table table').toggleClass('color')
})