// function p() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i* 1000);
//     }

//     console.log("Eample2");
// }
// p();

//solution to the above problem using let

// function p() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Example2");
// }
// p();

// without using let, by creating a closure.
function p() {
    for (let i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i);

    }
    console.log("Example2");
}
p();