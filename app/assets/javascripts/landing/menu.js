// Open Menu
$( document ).on("click", "#menu-opener", function(e) {
  e.preventDefault();

  openMenu();
});

// Close Menu
$( document ).on("click", "#menu-closer", function(e) {
  e.preventDefault();

  closeMenu();
});

function openMenu() {
  var openMenuSequence = [
    { e: $("#menu"), p: { translateX: [0, "-100%"] }, o: { duration: 300 } },
    { e: $("#about"), p: { "transform": "translateX([0, -10px])", opacity: [1, 0] }, o: { duration: 300 } },
    { e: $("#images"), p: { translateX: [0, "-10px"], opacity: [1, 0] }, o: { duration: 300 } },
    { e: $("#follow"), p: { translateX: [0, "-10px"], opacity: [1, 0] }, o: { duration: 250 } },
    { e: $("#menu-closer"), p: { translateY: [0, "-100%"], rotateZ: ["180deg", 0] }, o: { duration: 300 } }
  ];

  $.Velocity.RunSequence(openMenuSequence);
};

function closeMenu() {
  var closeMenuSequence = [
    { e: $("#menu-closer"), p: { translateY: "-100%", rotateZ: "180deg" }, o: { duration: 300 } },
    { e: $("#about"), p: { translateX: "-10px", opacity: 0 }, o: { duration: 300 } },
    { e: $("#images"), p: { translateX: "-10px", opacity: 0 }, o: { duration: 300 } },
    { e: $("#follow"), p: { translateX: "-10px", opacity: 0 }, o: { duration: 300 } },
    { e: $("#menu"), p: { translateX: "-100%" }, o: { duration: 300 } },
  ];

  $.Velocity.RunSequence(closeMenuSequence);
};

// Source:
//  http://codepen.io/tutsplus/pen/VLdvXE
//  http://webdesign.tutsplus.com/tutorials/silky-smooth-web-animation-with-velocityjs--cms-24266