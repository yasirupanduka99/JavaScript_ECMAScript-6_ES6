/*

    Arrow functions are anonymous functions i.e. they are functions without a name and are not 
    bound by an identifier. Arrow functions do not return any value and can be declared without 
    the function keyword. They are also called Lambda Functions.

    Note: all older methods are still working as it is in ECMAScript(JavaScript).
    
*/

window.onload = function () {

    // Practise --- 1
    
    // function declaring previous method
    var simpleFunction = function() {
        console.log("yamete kudasaiii🫥");
    }

    simpleFunction();


    // function declaring using Arrow function
    var secondFunction = () => {
        console.log("yamete kudasaiii🫥");
    }

    secondFunction();


    // Arrow function with parameters
    var thirdFunction = (name) => {
        console.log(`${name} says yamete kudasaiii🫥`);
    }

    thirdFunction("Jenny");


    // previously function with object
    var ninja = {
        name: "yasiru",
        chop(x) {
            var _this = this; // this means we getting this state to _this variable. so we can access name using _this variable when we want it use in next function inside the chop function
            window.setInterval(function(){
                if(x > 0) {
                    // console.log(this.name + " chopped the enemy"); // `this` keyword refering chop function so inside the chop functin there is no variable called name. 
                    console.log(_this.name + " chopped the enemy");
                    x--;
                }
            }, 1000);
        }
    };

    ninja.chop(5);


    // Arrow function with object
    var ninja2 = {
        name: "Kevin",
        chop(x) {
            window.setInterval(() => {
                if(x > 0) {
                    console.log(this.name + " chopped the enemy"); // when use arrow function we can use `this` keyword because it refer ninja2 object.
                    x--;
                }
            }, 1000);
        }
    };

    ninja2.chop(6);

};