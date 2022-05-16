window.onscroll = function () {
    scrollbarFunction()

};

function scrollbarFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var newscrolled = (scrolled - (scrolled / 100 * 10));
    document.getElementById("myBar").style.marginTop = (newscrolled + "vh");
}