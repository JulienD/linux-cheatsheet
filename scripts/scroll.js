
jQuery.fn.topLink = function(settings) {
  settings = jQuery.extend({
    min: 1,
    fadeSpeed: 200
  }, settings);
  return this.each(function() {
    //listen for scroll
    var el = $(this);
    el.hide(); //in case the user forgot
    $(window).scroll(function() {
      if($(window).scrollTop() >= settings.min) {
        el.fadeIn(settings.fadeSpeed);
      }
      else {
        el.fadeOut(settings.fadeSpeed);
      }
    });
  });
};

(function() {
  $(document).ready(function() {  
    // Top link display
    $('#top-link').topLink({
      min: 400,
      fadeSpeed: 400
    });
    // Scroll to top
    $('#top-link').on('click', function(e) {
      $('html, body').animate({ scrollTop: 0 });
      return false;
    });

    // Scroll to command
    $('.navlist a').on('click', function(e) {        

      e.preventDefault()
      var locationHref = window.location.href
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      console.log(destination);

      $('html, body').animate({ scrollTop: destination}, function() {
        window.location.hash = elementClick;
      });
      return false;
    });

  });
})();