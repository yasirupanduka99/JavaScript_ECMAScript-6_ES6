/*

    The JavaScript spread operator (...) allows us to quickly 
    copy all or part of an existing array or object into another 
    array or object.

    The spread operator (`...`) in JavaScript is a powerful and versatile 
    tool that simplifies many common tasks involving arrays and objects. 
    It allows you to copy, merge, and expand arrays and objects with 
    concise syntax, enhancing code readability and maintainability.
    
*/

window.onload = function () {

    // Practise --- 1

        var meats = ["ham", "bacon", "chicken"];

        // Using spread operator we can get all items separatly
        console.log("Using spread operator : ", ...meats);

        // When we direct log array then it show as list of array items
        console.log("Using array : ", meats);


    // Practise --- 2

        var nums1 = [1, 2, 3];
        var nums2 = [4, 5, 6];

        // I want to add all data in nums1 to nums2 array. how it done using this spread operator.
        // var nums2 = [nums1, 4, 5, 6]; // This statement not give [1, 2, 3, 4, 5, 6] its give [Array(3), 4, 5, 6]
        var nums2 = [...nums1, 4, 5, 6]; // This statement give [1, 2, 3, 4, 5, 6]
        console.log(nums2);

    
    // Practise --- 3

        var nums = [3, 5, 7];

        function addNums(a, b, c) {
            console.log("Total is ", a + b + c);
        }

        addNums(nums); // this will thrw undefine error, because we cant add array as parameter values.
        addNums(...nums); // this will work, because spread operator get individual number

};