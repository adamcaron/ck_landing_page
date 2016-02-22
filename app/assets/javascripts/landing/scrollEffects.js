$( document ).scroll(function() {
  fadeHeaderOnScrollDown();
  keepMenuOutOfFooter();
});

function fadeHeaderOnScrollDown() {

  $(window).scroll(function() {
    var $coverLayer       = $(".opacityCoverLayer")
        scrollDistance    = $(this).scrollTop(),
        opacityByDistance = (scrollDistance / ( $coverLayer.height() * 1.25 )),
        opacityLevel      = Math.min(opacityBasedOnDistance, 1);

    $coverLayer.css({
      opacity: opacityLevel
    });
  });

  // Source:
  //  http://codepen.io/theaftermath87/pen/mJqywj
};

function keepMenuOutOfFooter() {
  var $menuLink = $("#menu-opener"),
      footerDistance = $("footer").offset().top - $(window).scrollTop(),
      allowance = 80;

  // Slide menuLink up out of view:
  if (footerDistance < allowance) {
    var newMargin = allowance - footerDistance;
    $menuLink.css('margin-top', -newMargin);
  }

  // Slide it back down into view:
  else if (footerDistance > allowance) {
    $menuLink.css('margin-top', 0);
  };

  // Source:
  //  http://jsfiddle.net/psvn9/400/
  //  http://stackoverflow.com/questions/11434735/change-element-style-on-page-scroll
  //  http://stackoverflow.com/questions/9880472/determine-distance-from-the-top-of-a-div-to-top-of-window-with-javascript
};
