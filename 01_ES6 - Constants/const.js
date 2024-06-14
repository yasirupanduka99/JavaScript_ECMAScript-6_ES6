/*

    In JavaScript, const declares block-scoped, read-only variables that must be initialized at declaration but allow modification of their object or array contents.

    - The const keyword was introduced in ES6 (2015)
    - Variables defined with const cannot be Redeclared
    - Variables defined with const cannot be Reassigned

    When to use JavaScript const?
    Always declare a variable with const when you know that the value should not be changed.
*/

window.onload = function () {
  const pi = 3.142;
  console.log("In the begining `pi` value: " + pi);
  // pi = 10; // can't assign new values to const variables
  // const pi = 5; // can't redeclare const variables that already declared.

  function calcArea(r) {
    // pi = 12; // in localy also can't reassign new values to const variables.
    const pi = 10; // in localy you can redeclare const vavriable and assign new value. but this value only work in localy(inside the function only).
    console.log("Inside the function `pi` value: " + pi);
    console.log("The area is: " + pi * r * r);
  }

  calcArea(7);
  console.log("After the function `pi` value: " + pi);
};
