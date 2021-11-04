
$(window).scroll( function(){

    let scrollValue = $(window).scrollTop()

    if( scrollValue >= 400)
    {

        $(".navbar").addClass("navbarBG");
     
        $(".navbar").parent().removeClass(".containerfluid.home");
        




    }



})