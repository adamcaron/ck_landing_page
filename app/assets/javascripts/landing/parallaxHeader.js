function parallaxHeader() {

  // Add easing for logo & header's parallax effect
  $('#logo, #hero').css({
    "-webkit-transition": ".15s ease",
    "-moz-transition": ".15s ease",
    "-o-transition": ".15s ease",
    "transition": ".15s ease"
  })

  // Adjust header/logo position based on mouse position
  $(window).on('mousemove', function(event) {
    var $logo       = $('#logo'),
        $hero       = $('#hero'),
        $container  = $('body'),
        container_w = $container.width(),
        container_h = $container.height(),
        pos_x       = event.pageX,
        pos_y       = event.pageY,
        left        = container_w / 2 - pos_x,
        top         = container_h / 2 - pos_y;

    $logo.css({
      transform: 'translateX(' + left / 30 + 'px) translateY(' + top / 30 + 'px)'
    });

    $hero.css({
      transform: 'translateX(' + left / 48 + 'px) translateY(' + top / 40 + 'px)'
    });
  })
}

// Source: http://codepen.io/yvesvanbroekhoven/pen/igtmy/