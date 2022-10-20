/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-effect").style.top = "0";
  } else {
    document.getElementById("header-effect").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}