let header = document.querySelector(".headerWrap");
let logo = document.querySelector(".logo");
let headerHeight = header.offsetHeight;
let currentWidth = header.offsetWidth;

window.onscroll = function () {
    let windowTop = window.scrollY;
    // console.log(windowTop);
    // console.log("너비 " + currentWidth);

    if(windowTop == 0) {
        header.classList.remove("fixed");
        // console.log("맨위")
    }
    else  {
        header.classList.add("fixed");
        // console.log("이벤트 추가");
    }

    if(windowTop >= 500) {
        header.classList.add("change");
        logo.style.fontSize = "28px";
    }
    else {
        header.classList.remove("change");
        logo.style.fontSize = "35px";
    }
};