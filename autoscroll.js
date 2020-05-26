function pageScroll() {
    window.scrollBy(0, 1);
    scrolldelay = setTimeout(pageScroll,15);
}
function stopScroll() {
    clearTimeout(scrolldelay);
}
pageScroll();

window.addEventListener("wheel", stopScroll);