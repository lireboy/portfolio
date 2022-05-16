window.onscroll = function () {
    scrollbarFunction()

};

function scrollbarFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var newscrolled = (scrolled - (scrolled / 100 * 10));
    document.getElementById("myPoint").style.marginTop = (newscrolled + "vh");
    var reverse = (90 - newscrolled);
    document.getElementById("myBackgroundline").style.height = (reverse + "%");
}