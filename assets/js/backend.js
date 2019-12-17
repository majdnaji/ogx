$(document).ready(function()
{
    // $(window).scroll(function(event)
    // {
    //     var y = $(this).scrollTop();
    //     if(y >= 300)
    //     {
    //         $('.animated').addClass('canAnimate');
    //     }
    //     else
    //     {
    //         $('.animated').addClass('puaseAnimate');
    //     }

    // });
    $(window).scroll(function () {
        if($(window).scrollTop() > 0) {
            $('#verticalLines').addClass('canAnimate');
        }
        else {
            element.removeClass("canAnimate");
          element.addClass("puaseAnimate");
        }
      });
});