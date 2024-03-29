$('.cn-tower svg:nth-child(2), .speech-bubble').mouseover(function(){
     $('.speech-bubble').css('opacity','1');
});
$('.cn-tower svg:nth-child(2)').mouseleave(function(){
     $('.speech-bubble').css('opacity','0');
});
$('.cn-tower svg:nth-child(2)').click(function(){
    $('.lovebot').toggleClass('love-right');
    $('.cn-tower').toggleClass('cn-tower-left');
    $('.speech-bubble').toggleClass('big-bubble');
    $('.small-tri').toggleClass('small-tri-off');
    $('.big-tri').toggleClass('big-tri-on');
    $('.loveyou').toggleClass('loveyou-more');
});