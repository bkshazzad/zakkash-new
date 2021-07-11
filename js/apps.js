$(function(){
    $('.banner').slick({
        prevArrow:'<i class="fas fa-angle-right "></i>',
        nextArrow:'<i class="fas fa-angle-left"></i>',
    //   autoplay: true,
    //   autoplaySpeed:1000,
      dots: true,
      dotsClass: 'slick-dots',
    });
    // stickynav
    $(window).on('scroll',function(){
      if($(window).scrollTop() > 0){
        $('.navbar').addClass('stickyNav')
      }else{
        $('navbar').removeClass('stickyNav')
      }
    })
    // filter-container
    $('.filter-container').filterizr();
    // team_member_container
  $('.team_member_container').slick({
    slidesToShow:5,
    arrows: false,
    centerMode:true,
    centerPadding:0,
    asNavFor: '.team_member_details',
    // prevArrow:'<i class="fas fa-angle-right team-slick-right"></i>',
    // nextArrow:'<i class="fas fa-angle-left team-slick-left"></i>',
  });

  // team_member_details

  $('.team_member_details').slick({
    asNavFor: '.team_member_container',
    arrows: false,

  });

  // feedback-slick

  $('.feedback-slick').slick({
    arrows: false,
    autoplay:true,
    autoplaySpeed:1000,
  });
  $('.counter').counterUp();
  // planes
  $('.plans-slider').slick();
})