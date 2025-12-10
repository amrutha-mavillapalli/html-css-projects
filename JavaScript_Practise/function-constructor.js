// Example of function constructor
function Counter(){
    var count = 0;

    this.increment = function() {
        count++;
        console.log(count);
    };

    this.decrement = function() {
        count--;
        console.log(count);
    };
}
 var counter1 = new Counter();
 counter1.increment(); // prints 1
 counter1.increment(); // prints 2
 counter1.decrement(); // prints 1