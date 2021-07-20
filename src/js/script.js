$(document).ready(function(){
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
    $("#close-menu").on("click", (ev) =>
    {
        $(".mobile-menu").fadeOut(200);
        $(".mobile-menu").removeClass("onblock");
        $(".mobile-menu").addClass("noneblock");
        $("html").removeClass("onscroll");
        $("body").removeClass("onscroll");
    })
    $(".header-nav-burger").on("click", (ev) =>
    {
        $(".mobile-menu").fadeIn(200);
        $(".mobile-menu").addClass("onblock");
        $(".mobile-menu").removeClass("noneblock");
        
        $("html").addClass("onscroll");
        $("body").addClass("onscroll");
        
        
    })
    $('.features-slider').on("afterChange", function(event, slick, currentSlide, nextSlide){
        let slides = slick.$slides;
        for(let i = 0; i < slides.length; i++)
        {
            let attr = slides[i].getAttribute("aria-hidden");
            if(attr == "false"){
                
                let dots = slides[i].querySelectorAll(".slick-dots li button");
                for(let j = 0; j < dots.length; j++){
                    dots[i].classList.add("active-butt");
                }
            }
        }
    });
    
    $('.features-slider').on('init', function(event, slick, currentSlide, nextSlide){
       
        //console.log(e);
        let dots = slick.$dots;
        let slides = slick.$slides;
       

        for(let i = 0; i < dots.length; i++)
        {
           let presentation = dots[i].querySelectorAll("li button");
           let dots_buttons = dots[i].querySelectorAll("li button");
           
           for(let j = 0; j < dots_buttons.length; j++)
           {
               dots_buttons[j].innerHTML = "";
              
               
           }
        }
        for(let i = 0; i < slides.length; i++)
        {
            let attr = slides[i].getAttribute("aria-hidden");
            if(attr == "false"){
                
                let dots = slides[i].querySelectorAll(".slick-dots li button");
                for(let j = 0; j < dots.length; j++){
                    dots[i].classList.add("active-butt");
                }
            }
        }
    });
    /*
    autoplay: true,
    autoplaySpeed: 300,*/
    $('.features-slider').slick({
        fade: true,
        dots: true,
        appendDots: $(".dots"),
       
        prevArrow: $(".prevArrow").html(
            `<button>
                <i class='fal fa-chevron-left'></i>
            </button>`
        ),
        nextArrow: $(".nextArrow").html(`
            <button>
                <i class='fal fa-chevron-right'></i>
            </button>`
        ),
        infinite: false
    });
});