$( document ).ready(function(){
  renderInitialAnimations();
})

function renderInitialAnimations(){
  var $header = $("header");
  var $logo   = $("#logo");

  $header.velocity("fadeIn", { duration: 550 });
  $logo.velocity({ scale: 1.07 }, { duration: 750 } )
    .velocity({ scale: 1 }, { duration: 750, easing: [ 6, 2 ] })
}