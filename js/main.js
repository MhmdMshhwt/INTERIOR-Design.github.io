$(document).ready(function(){
    /// slider height
    
   // $(".owl-carousel .item").height($(window).height());
    //$(window).resize(function(){
       // $(".owl-carousel .item").height($(window).height());  
    //})
    //owl-carsoul
    $('.header .owl-carousel').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        animateOut:'fadeOut',
        smartSpeed:450
    })
    
    //owl-carsoul
    $('.brands .owl-carousel').owlCarousel({
      loop:true,
     responsive:{0:{items:2},768: {items:4},992: {items:6} },
      autoplay:true,
      
  })
    //// side menue
    $(".menue").on("click",function(){
        $(".side-menue").toggleClass("open")
    })
    $(".fa-times").on("click",function(){
        $(".side-menue").removeClass("open")
    })
////scroll navs
$(window).scroll(function(){
  if($(this).scrollTop()>= 30){
      $("nav-let").fadeOut(500)
      $(".nav-top").fadeIn(500)
  }else{
    $("nav-let").fadeIn(500)
    $(".nav-top").fadeOut(500)
  }
})
/// count down
var count = $(".count-down").html();
$(".count-down").countdown("2021/09/30", function(event) {

    
  $(this).html(event.strftime(count));
});



 /// switch between links

 var x4 = $("link[data-color='switch']");
$(".fa-moon-o").on("click",function()
{
  if(x4.attr("href") === "css/style.css")
  {
    x4.attr("href","css/style-dark.css")
  }
  else
  {
    x4.attr("href","css/style.css")
  }
})


})


/////////////////////////////////js
///counter up
const counters = document.querySelectorAll('.about .num');
const delay = 200;
counters.forEach(counter =>{
    const updeteCount =  () =>{
       const target = counter.getAttribute("data-count");
      const count = +counter.innerHTML;
      const speed = target/delay;
     
    
      if( count <target){
        counter.innerHTML =count + speed ;
        setTimeout( updeteCount,1)
      }else{
        counter.innerHTML = target; 
      }
     
    }
    updeteCount();
})