const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


$(window).scroll(
  function()
  {
  $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
  });
  
  $(document).ready(function(){
      $(window).scroll(function(){
          // sticky navbar on scroll script
          if(this.scrollY > 20){
              $('.scrolled').addClass("sticky");
          }else{
              $('.scrolled').removeClass("sticky");
          }
          
          // scroll-up button show/hide script
          if(this.scrollY > 500){
              $('.scroll-up-btn').addClass("show");
          }else{
              $('.scroll-up-btn').removeClass("show");
          }
      });
  
      // slide-up script
      $('.scroll-up-btn').click(function(){
          $('html').animate({scrollTop: 0});
          // removing smooth scroll on slide-up button click
          $('html').css("scrollBehavior", "auto");
      });
  
      $('.navbar .menu li a').click(function(){
          // applying again smooth scroll on menu items click
          $('html').css("scrollBehavior", "smooth");
      });
  
      // toggle menu/navbar script
      $('.menu-btn').click(function(){
          $('.navbar .menu').toggleClass("active");
          $('.menu-btn i').toggleClass("active");
      });
      
      // typing text animation script
      var typed = new Typed(".typing", {
          strings: ["Learner", "Developer", "Coder", "Freelancer"],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true
      });
  
      var typed = new Typed(".typing-2", {
          strings: ["Learner", "Developer", "Coder", "Freelancer"],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true
      });
  });