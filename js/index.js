// const
var leftArrow = "--&gt;";
var rightArrow = "&lt;--"

// elements
var header = document.getElementsByTagName("header")[0];
var nav = document.getElementsByTagName("nav")[0];
var content = document.getElementsByClassName("mainContent")[0];

function init() {
    setNavLinksWidth();
    navLinkActive();
}

function setNavLinksWidth() {
    var navChildren = nav.children;
    var widthLength = 100 / navChildren.length;

    for (i = 0; i < navChildren.length; i++) {
        navChildren[i].style.width = widthLength + "%";
    }
}

function navLinkActive() {
    var activeSentence = document.getElementsByClassName("navActive")[0].getElementsByTagName("p")[0];
    activeSentence.innerHTML = leftArrow + activeSentence.innerHTML + rightArrow;
}

function navLinkHover(navLink) {
    var linkSentence = navLink.getElementsByTagName("p")[0];
    linkSentence.innerHTML = leftArrow + linkSentence.innerHTML + rightArrow;
}

function navLinkNotHover(navLink) {
    var linkSentence = navLink.getElementsByTagName("p")[0];
    var linkString = linkSentence.innerHTML;

    if (linkString.substring(0, 6) === leftArrow) {
        var endPos = linkString.lastIndexOf(rightArrow);
        linkSentence.innerHTML = linkString.substring(6, endPos);
    }
}

window.onscroll = function () {
    var offset = header.offsetHeight;

    if (window.scrollY >= offset) {
        nav.style.position = "fixed";
        nav.style.top = "0";
        content.style.paddingTop = nav.offsetHeight + "px";
    } else {
        nav.style.position = "static";
        content.style.paddingTop = "0";
    }
}

