$( document ).scroll(function(){
  keepMenuOutOfFooter()
})

function keepMenuOutOfFooter() {
  var $menuLink = $("#menu-opener"),
      footerDistance = $("footer").offset().top - $(window).scrollTop(),
      allowance = 80

  // Slide menuLink up out of view:
  if (footerDistance < allowance) {
    var newMargin = allowance - footerDistance;
    $menuLink.css('margin-top', -newMargin);
  }

  // Slide it back down into view:
  else if (footerDistance > allowance) {
    $menuLink.css('margin-top', 0);
  }

  // Source:
  //  http://jsfiddle.net/psvn9/400/
  //  http://stackoverflow.com/questions/11434735/change-element-style-on-page-scroll
  //  http://stackoverflow.com/questions/9880472/determine-distance-from-the-top-of-a-div-to-top-of-window-with-javascript
}
