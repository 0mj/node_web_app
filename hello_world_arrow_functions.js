
// arrow functions are bound to their lexical scope..
// function DelayedGreeter(name){
// 	this.name = name;
// }

// DelayedGreeter.prototype.greet = function(){
// 	setTimeout( function cb() {
// 		console.log('Hello ' + this.name);
// 	}, 500);
// };

// const greeter = new DelayedGreeter('World');
// greeter.greet(); // prints "Hello undefined"
/* reason you get undefined is because inside the timeout callback function (cb), the scope of the function is different from the scope of greet method */


// ------------------------------------------------------------
function DelayedGreeter(name){
	this.name = name;
}

DelayedGreeter.prototype.greet = function() {
	setTimeout( () => console.log('Hello ' + this.name), 500);
};

const greeter = new DelayedGreeter('World');
greeter.greet(); // prints "Hello World"

