let nav = document.querySelector(".nav");
let navList = document.querySelector(".nav-list");
let logo = document.querySelector("#nav-item");
let logo2 = document.querySelector(".nav-ko");
let logo3 = document.querySelector(".nav-logo");
let headerHeight = nav.offsetHeight;
let currentWidth = nav.offsetWidth;

window.onscroll = function () {
    let windowTop = window.scrollY;
    // console.log(windowTop);
    // console.log("너비 " + currentWidth);
    // console.log(windowTop);

    if(windowTop >= 500) {
        nav.classList.add("change");
        navList.classList.add("change");
        logo.style.fontSize = "40px";
        logo.style.padding = "0px";
        logo2.style.display = "none";
        logo3.style.margin = "10px 75px";
    }
    else {
        nav.classList.remove("change");
        navList.classList.remove("change");
        logo.style.fontSize = "120px";
        logo.style.padding = "30px";
        logo2.style.display = "block";
        logo3.style.margin = "40px 0";
    }
};