
var div = document.querySelector("#box")
// Store original content and style
const originalContent = div.innerHTML;
const originalBorderRadius = div.style.borderRadius;
const originalColor = div.style.backgroundColor;

div.addEventListener("mouseenter", function () {
    div.innerHTML = "HI";
    div.style.backgroundColor = "royalblue"
    div.style.borderRadius = "50px"; // make it round on hover 
});
div.addEventListener("mouseleave", function () {
    div.innerHTML = originalContent;           // revert content
    div.style.backgroundColor = originalColor;
    div.style.borderRadius = originalBorderRadius; // revert border radius
});



var button = document.querySelector("#button1")
var count = 0
button.addEventListener('click',function(){
    count++;
    button.innerHTML = "Count "+count;
})