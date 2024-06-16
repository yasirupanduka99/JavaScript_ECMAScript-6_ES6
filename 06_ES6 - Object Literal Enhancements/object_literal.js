/*

    Object literal enhancement is used to group variables from the global scope and 
    form them into javascript objects. It is the process of restructuring or putting back together.

    Note: all older methods are still working as it is in ECMAScript(JavaScript).
    
*/

window.onload = function () {

    // Practise --- 1
    var name = "Crystal";
    var belt = "black";

    var oldObject = {
        name: name, // Asign name variable value to name key
        belt: belt, // Assign belt variable value to belt key
        chop: function(x){ // this is how previously make functions inside object
            console.log('you chopped the enemy ' + x + ' times.');
        }
    }

    console.log(oldObject.name, oldObject.belt); // calling object properties
    oldObject.chop(5); // Calling object function, which is inside the object

    var newObject = {
        name, // this name key assign value from name variable, which is inside the global [because of same name for key and variable]
        belt, // this belt key assign value from belt variable, which is inside the global [because of same belt for key and variable]
        chop(x) { // this is how ES6 do function implementation inside the object: this easy and shorter way
            console.log(`you chopped the enemy ${x} times.`);
        }
    }

    console.log(newObject.name, newObject.belt); // calling object properties
    newObject.chop(7); // Calling object function, which is inside the object

};