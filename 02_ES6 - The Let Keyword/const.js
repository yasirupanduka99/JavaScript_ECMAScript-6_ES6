/*

    In JavaScript, let declares block-scoped variables that can be updated but not re-declared within the same block.

    - The let keyword was introduced in ES6 (2015)
    - Variables declared with let have Block Scope
    - Variables declared with let must be Declared before use
    - Variables declared with let cannot be Redeclared in the same scope

    
*/

window.onload = function () {
  
  // x declare using var keyword and assign values for it in global state.
  var x = 10;

  if(x > 5) {
    var x = 5; // Re-declaring the x value as 5 in local scope(in a block(ex: if block))
    console.log("x value with `var` keyword in if block scope : " + x); // x = 5
  }

  // var keyword is update value in global and local both when re-declare.
  console.log("x value with `var` keyword in global state : " + x); // x = 5



  // when comes to let keyword. it is only update local scope when localy declaring

  // y declare using let keyword and assign values for it in global state.
  let y = 10;

  if(y > 5) {
    let y = 5; // Re-declaring the y value as 5 in local scope(in a block scope)
    console.log("y value with `let` keyword in if block scope : " + y); // y = 10
  }

  console.log("y value with `let` keyword in global state : " + y); // y = 10



  // Another example for let keyword comparing with var keyword
  var items = document.getElementsByTagName('li');

  // --Using var keyword (if you want to see work this you have to comment let phase in below)
  for(var i = 0; i < items.length; i++) {

    items[i].onclick = function(){
      console.log("You Clicked button using var keyword " + i); // This will give you always i = 4, because var keyword update i to 4 in firstly with looping.
    }

  }

  // --Using let keyword
  for(let j = 0; j < items.length; j++) {

    items[j].onclick = function() {
      console.log("You Clicked button using let keyword " + j);
    }

  }

};
