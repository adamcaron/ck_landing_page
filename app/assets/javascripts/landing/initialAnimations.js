$( document ).ready(function(){
  animateHeader();
})

function animateHeader(){
  var $header   = $("header"),
      $logo     = $("#logo"),
      $crossbar = $("#crossbar"),
      $menuLink = $("#menu-opener")
      $menuLinkIcon = $("#menu-opener i")

  var headerSequence = [
    { e: $header, p: { opacity: 1 }, o: { duration: 550 } },
    { e: $logo, p: { scale: 1.07 }, o: { duration: 350 } },
    { e: $logo, p: { scale: 1 }, o: { duration: 700, easing: [7, 2] } }
  ]

  var menuSequence = [
    { e: $menuLink, p: { opacity: 1, scale: 1 }, o: { duration: 2000 } },
    { e: $menuLink, p: { scale: .85 }, o: { duration: 200 } },
    { e: $menuLink, p: { scale: 1.3 }, o: { duration: 250 } },
    { e: $menuLink, p: { scale: 1.3 }, o: { duration: 200 } },
    { e: $menuLink, p: { scale: 1 }, o: { duration: 600, easing: [3, 2] } },
    { e: $menuLinkIcon, p: { scale: .85, rotateZ: "30deg" }, o: { duration: 400 } },
    { e: $menuLinkIcon, p: { scale: 1.2, rotateZ: "-375deg" }, o: { duration: 500 } },
    { e: $menuLinkIcon, p: { scale: 1, rotateZ: "-360deg" }, o: { duration: 800, easing: [3, 1] } }
  ]

  $.Velocity.RunSequence(headerSequence);
  $.Velocity.RunSequence(menuSequence);
}