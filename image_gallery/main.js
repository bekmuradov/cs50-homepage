/* jshint esversion: 6 */

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('#filter');
const overlay = document.querySelector('.outer');

/* Looping through images */
let imgPath = [];
for (let i = 0; i < 5; i++) {
     imgPath.push("images/pic" + (i+1) + ".bmp");
     const newImage = document.createElement('img');
     newImage.setAttribute('src', imgPath[i]);
     thumbBar.appendChild(newImage);
}
thumbBar.addEventListener("click", function(e){
    displayedImage.setAttribute("src", e.target.getAttribute("src"));   
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function (e) {
    let className = e.target.getAttribute("class");
    if(className === "dark") {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        e.target.textContent = "Lighten";
        e.target.setAttribute("class", "light");
    } else {
        e.target.setAttribute("class", "dark");
        e.target.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }  
});