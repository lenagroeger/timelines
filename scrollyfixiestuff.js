$(document).ready(function() {

  $('a[href*=#]').click(function() {
    var curInx = this.hash;
    var target = $(curInx);
    var targetOffset = target.offset().top;
    $("body").animate({scrollTop: (targetOffset)}, 400, function() {
      location.hash = curInx;
    });

  });

  $(document).keydown(function(e){
    windowTop = $(window).scrollTop();
    e.preventDefault();

    if (e.which == (38 || 37)) {
      $($(".section").get().reverse()).each(function(i, section, event) {
        sectionTop = $(section).offset().top;
        if (windowTop>sectionTop) {
          $("body").animate({scrollTop: (sectionTop)}, 400);
          return false;
        }
      });

      } else if (e.which == (40 || 39 || 13 || 32)) {
      $(".section").each(function(i, section){
        sectionTop = $(section).offset().top;
        if (windowTop<sectionTop) {
          $("body").animate({scrollTop: (sectionTop)}, 400);
          return false;
        }
      });
    }
  });

  $(window).scroll(function() {
    var sticky = function(index) {
        $('li').removeClass('active'), $('.' + index + '-nav').addClass('active');
      };
    $('.section').each(function(){
      var cur = $(this);
      var curTop = cur.offset().top;
      var curInx = cur.attr("id");
      var sidebarTop = $('.'+curInx+'-nav').offset().top - 60;
        if (sidebarTop > curTop) {
          sticky(curInx);
        }
    });
  });

});