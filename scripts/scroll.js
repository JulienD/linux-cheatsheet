jQuery.fn.topLink = function () {
    return this.each(function () {
        var elem  = $(this)
            speed = 400;
        elem.hide();
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 1) {
                elem.slideDown(speed)
            } else {
                elem.slideUp(speed)
            }
        })
    })
};
(function () {
    $(document).ready(function () {    
        $("#toTheTop").topLink();
        $("#toTheTop").on("click", function () {
            return $("html, body").animate({ scrollTop: 0 });            
        });

        $(".navlist a").on("click", function (a) {
            a.preventDefault();
            var attr   = $(this).attr("href"),
                offset = $(attr).offset().top;
            $("html, body").animate({
                scrollTop: offset
            }, function () {
                window.location.hash = attr
            });
            return false
        })
    })
})()