$(window).scroll(
    function()
    {
    $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
    });
    
$(document).ready(function(){
    $(window).scroll(function()
    {
        // sticky navbar on scroll script
        if(this.scrollY > 20)
        {
            $('.scrolled').addClass("sticky");
        }
        else
        {
            $('.scrolled').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else
        {
            $('.scroll-up-btn').removeClass("show");
        }
    })
});