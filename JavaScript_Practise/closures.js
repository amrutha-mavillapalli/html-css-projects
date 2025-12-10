
//ex-1
function p() {
    var a = 7;
    function q() {
        console.log(a);
    }
    a = 100;
    return q;
}
var r = p();
console.log(r);
//………………
r();



//ex-2:
function z() {
    var b=900;
    function x() {
        var a = 7;
        function y() {
            console.log(a,b);
        }
       y();
    }
    x();
}
z();