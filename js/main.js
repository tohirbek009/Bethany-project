$(document).ready(function (){
  $(window).scroll(function (){
      if (this.scrollY > 50){
          $('#home').addClass("back-white");
      }else if(this.scrollY < 50){
          $('#home').removeClass("back-white");
      }
  })


    // <==   MixItUp Filter PORTFOLIO   ==> //
    const mixer = mixitup('.portfolio-container', {
        selectors: {
            target: '.portfolio-item'
        },
        animation: {
            duration: 400
        }
    });

    const linkPortfolio = document.querySelectorAll('.portfolio-change')
    function activePortfolio(){
        if(linkPortfolio){
            linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
            this.classList.add('active-portfolio')
        }
    }
    linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))



//  <==  Owel Carousel   ==>  //
    $('.owl-carousel').owlCarousel({
        items:2,
        loop:true,
        autoplay:true,
        autoplayTimeout: 3000,
        nav: true
    })
    AOS.init({
        offset: 170,
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
    });
});

