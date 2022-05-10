window.onload = function() {
    // gnb 기능  
    // 1. gnb 를 저장한다.
    let gnb = $('.gnb');
    // 2. header 를 저장한다.
    let header = $('.header');
    // 3. gnb 에 마우스 오버를 하면 .header 가 늘어난다.
    gnb.mouseenter(function(){
        header.addClass('header-active');
    });
    // 4. gnb 에 마우스 아웃을 하면 .header 가 줄어든다.
    gnb.mouseleave(function(){
        header.removeClass('header-active');
    });
    
    let modal_close = $('.modal-close');
    let modal_close_2 = $('.modal-close-2');
    let modal = $('.modal');
    let modal_review = $('.modal-review');
    let modal_review_bt = $('.modal-review-bt');

    modal_close.click(function(){
        modal.hide();
    });
    modal_close_2.click(function(){
        modal.hide();
    });
    modal_review_bt.click(function(){
        modal_review.show();
    });

}