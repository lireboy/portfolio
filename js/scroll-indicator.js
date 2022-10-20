window.onscroll = function () {
    scrollbarFunction()

};

function scrollbarFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled)
    document.getElementById("myBar").style.width = (scrolled + "%");
    if (scrolled <= 40){
        document.getElementById("myBar").style.backgroundColor = 'red';
    } else if (scrolled > 40 && scrolled <= 80){
        document.getElementById("myBar").style.backgroundColor = 'yellow';
    } else if (scrolled > 80 && scrolled <= 100){
        document.getElementById("myBar").style.backgroundColor = '#00D016';
    }

}