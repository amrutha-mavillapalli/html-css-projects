// callback functions example

// setTimeout(function() {
//     console.log("Timer");
// }, 5000);   

// function x(y) {
//     console.log("x function called");
//     y();
// }
// x(function y() {
//     console.log("y function is called- Callback function executed");
// });


function attachEventListeners() {
    let count = 0;
    document.getElementById("ClickMe")
.addEventListener("click", function xyz() {
    console.log("Button Clicked",++count);
});
}

attachEventListeners();