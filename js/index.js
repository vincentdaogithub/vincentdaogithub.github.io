// const
const leftArrow = "--&gt;";
const rightArrow = "&lt;--"
const minFontSize = 16; 
const maxFontSize = 24;
const smallDeviceBreakpoint = 768;
const largeDeviceBreakpoint = 1200;

// elements
var html = document.getElementsByTagName("html")[0];
var header = document.getElementsByTagName("header")[0];
var nav = document.getElementsByTagName("nav")[0];
var content = document.getElementById("mainContent");
var footer = document.getElementsByTagName("footer")[0];

function init() {
    setRootFontSize();

    setChildrenWidthEqual(footer);
    setChildrenWidthEqual(nav);

    navLinkActive();
}

function setChildrenWidthEqual(element) {
    var navChildren = element.children;
    var widthLength = 100 / navChildren.length;

    for (i = 0; i < navChildren.length; i++) {
        navChildren[i].style.width = widthLength + "%";
    }
}

function navLinkActive() {
    var activeSentence = document.getElementById("navActive").getElementsByTagName("p")[0];
    activeSentence.innerHTML = leftArrow + activeSentence.innerHTML + rightArrow;
}

function linkHover(navLink) {
    var linkSentence = navLink.getElementsByTagName("p")[0];
    linkSentence.innerHTML = leftArrow + linkSentence.innerHTML + rightArrow;
}

function linkNotHover(navLink) {
    var linkSentence = navLink.getElementsByTagName("p")[0];
    var linkString = linkSentence.innerHTML;

    if (linkString.substring(0, 6) === leftArrow) {
        var endPos = linkString.lastIndexOf(rightArrow);
        linkSentence.innerHTML = linkString.substring(6, endPos);
    }
}

window.onscroll = function () {
    stickyNavBar();
}

function stickyNavBar() {
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

window.onresize = function () {
    setLinkHeightEqualImage();  // when tag <a> has <img> in it
    setRootFontSize();
}

function setLinkHeightEqualImage() {
    var links = document.getElementsByTagName("a");

    for (i = 0; i < links.length; i++) {
        var imgs = links[i].getElementsByTagName("img");

        if (imgs.length == 1) {
            links[i].style.height = imgs[0].offsetHeight + "px";
        }
    }
}

function setRootFontSize() {
    var vw = html.offsetWidth;
    var difFontSize = maxFontSize - minFontSize;

    if (vw <= smallDeviceBreakpoint) {
        html.style.fontSize = minFontSize + "px";
    } else if (smallDeviceBreakpoint < vw && vw <= largeDeviceBreakpoint) {
        html.style.fontSize = minFontSize + difFontSize *
            ((vw - smallDeviceBreakpoint) / (largeDeviceBreakpoint - smallDeviceBreakpoint)) +
            "px";
    } else {
        html.style.fontSize = maxFontSize + "px";
    }
}