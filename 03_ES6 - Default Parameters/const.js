/*

    In JavaScript, default parameters allow you to specify default values 
    for function parameters if no argument is provided (or if undefined is passed) 
    when the function is called. This makes your functions more flexible and helps 
    avoid undefined values.
    
*/

window.onload = function () {
  // Create function that getting parameters from outside.
  function log(num) {
    console.log(num);
  }

  // Calling the function
  log(5); // Now you should have add a parameter value to call this function. Otherwise without parameter value this getting error
  log(); // This will return underfine, because of not using parameter value.

  // So we can use defalut parameter to not getting this undifine error when we not add parameter value inside the function bracket when calling the function.
  function log2(num = 10) {
    // Added default value for parameter as 10
    console.log(num);
  }

  log2(); // Now we can't see any undefine error on console. instead of error, we getting default value of num, which is 10
  log2(20); // Now default value will be override. num = 20 now.

  // Little advancely practise
  function userData(name="Sam", address="Japan", age=25) {
    console.log(
      "My name is " + name +
      " and I'm from " + address +
      " and my age is " + age + "."
    );
  }

  userData("yasiru", "Sri Lanka", 24); // Calling function with new parameter values
  userData(); // Calling function without parameter.
};
