let nav = document.querySelector(".nav");
let navList = document.querySelector(".nav-list");
let headerHeight = nav.offsetHeight;
let currentWidth = nav.offsetWidth;

window.onscroll = function () {
    let windowTop = window.scrollY;
    // console.log(windowTop);
    // console.log("너비 " + currentWidth);
    // console.log(windowTop);

    if(windowTop >= 900) {
        nav.classList.add("change");
        navList.classList.add("change");
    }
    else {
        nav.classList.remove("change");
        navList.classList.remove("change");
    }
};