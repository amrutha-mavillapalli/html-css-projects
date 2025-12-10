// data hiding and encapsulation example
function counter()
{
    var count = 0; // private variable
    return function increment() {
        count += 1; // increment the private variable
        console.log(count); // return the current count
    }
}
 var counter1 = counter(); // create a new counter instance
    counter1(); // prints 1
    counter1(); // prints 2
    var counter2 = counter(); // create another counter instance
    counter2(); // prints 1
    counter2(); // prints 2
    counter2(); // prints 3, showing that counter2 is independent of counter1
    counter2(); // prints 4


    
// function outer(){
// var a=10;
//  function inner(){
//    console.log(a);
// }
// return inner;
// }
// outer()();
// // or instead of double parentheses
// // var close = outer();
// // close(); // prints 10
