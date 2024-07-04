$(document).ready(function(){
    // 서브메뉴 전체 슬라이드
    // $(".navi > li").mouseover(function(){
    //     $(".submenu").stop().slideDown()
    // }).mouseout(function(){
    //     $(".submenu").stop().slideUp()
    // })

    // 서브메뉴 개별 슬라이드
    $(".navi > li").mouseover(function(){
        // console.log(this);
        $(this).find(".submenu").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp()
    })

    // 이미지 슬라이드 기능
    setInterval(function(){
        $(".slidelist").delay(2000);
        $(".slidelist").animate({marginLeft: -1200});
        $(".slidelist").delay(2000);
        $(".slidelist").animate({marginLeft: -2400});
        $(".slidelist").delay(2000);
        $(".slidelist").animate({marginLeft: 0});
        $(".slidelist").delay(2000);
    })
// 모달창 기능
$(".popup").click(function(){
    $(".modal").addClass("active")
})
$(".close").click(function(){
    $(".modal").removeClass("active")
})


    // tabmenu
    $(function(){
        $(".tabmenu > li >a").click(function(){
    // console.log(this);
    // 해당 개체 클릭시 부모 개체에게 active 클래스 추가 = 다른 개체의 부모에게 클래스 헤제 
            $(this).parent().addClass("active").siblings().removeClass("active")
        })
    })
})