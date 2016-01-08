$(function(){
    if(window.requestAnimationFrame == undefined && //Chromium
      window.webkitRequestAnimationFrame == undefined && //Webkit
      window.mozRequestAnimationFrame == undefined && //Mozilla Geko
      window.oRequestAnimationFrame == undefined && //Opera Presto
      window.msRequestAnimationFrame == undefined) {
        $('.as-terminal').addClass("ie8");
        $('.as-terminal .anim-item').hide();

        $('.as-lang').addClass("ie8");
        $('.as-lang .anim-item').hide();

        $('.as-seo').addClass("ie8");
        $('.as-seo .anim-item').hide();

        console.log("no animation");
    } else {
        scrollShow($('.as-terminal .anim-section'));
        scrollShow($('.as-lang .anim-section'));
        scrollShow($('.as-seo .anim-section'));

        console.log("animation");
    }

    function scrollShow(ele) {
        if (!!ele.length) {
            var winHeight = $(window).outerHeight(); console.log("Window height: " + winHeight);
            var eleTop = Math.round(ele.offset().top); console.log("Element top: " + eleTop);
            var eleHeight = Math.round(ele.outerHeight()); console.log("ELement height: " + eleHeight);
            var winScrollTop;

            $(window).on('scroll', function() {
                winScrollTop = Math.round($(window).scrollTop());  console.log("Window scroll top: " + winScrollTop);
                var maxTop = Math.round(winScrollTop + winHeight - eleHeight*0.5); console.log("Max top: " + maxTop);
                var minTop = Math.round(winScrollTop - eleHeight*0.5); console.log("Min top: " + minTop);
                if(maxTop >= eleTop && eleTop >= minTop) {
                    if (!ele.hasClass("animating")) {
                        ele.addClass("animating");
                        ele.find(".anim-item").each(function(index){
                            $(this).on('webkitAnimationStart mozAnimationStart MSAnimationStart oanimationstart animationstart', function(){
                                $(this).css("opacity", "1");
                            });
                         });
                    }
                }
            });
        }
    }
});