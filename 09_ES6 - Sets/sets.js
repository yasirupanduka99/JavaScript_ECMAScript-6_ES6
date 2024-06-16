/*

    In ES6 (ECMAScript 2015), a Set is a built-in object that allows you to store unique values of any type,
    whether primitive values or object references. Sets are particularly useful for ensuring that a collection
    of items contains no duplicates.

    Key Features of Sets:

        1. Unique Values:
            A Set automatically removes duplicate values.
                Example:
                const set = new Set([1, 2, 2, 3, 4]);
                console.log(set); // Output: Set { 1, 2, 3, 4 }

        2. Size Property:
            You can get the number of elements in a Set using the size property.
                Example:
                console.log(set.size); // Output: 4

        3. Add Elements:
            Use the add method to add elements to a Set.
                Example:
                set.add(5);
                console.log(set); // Output: Set { 1, 2, 3, 4, 5 }

        4. Delete Elements:
            Use the delete method to remove elements from a Set.
                Example:
                set.delete(3);
                console.log(set); // Output: Set { 1, 2, 4, 5 }

        5. Check for Existence:
            Use the has method to check if an element exists in a Set.
                Example:
                console.log(set.has(4)); // Output: true
                console.log(set.has(6)); // Output: false

        6. Clear the Set:
            Use the clear method to remove all elements from a Set.
                Example:
                set.clear();
                console.log(set); // Output: Set {}

        7. Iterating over a Set:
            You can iterate over the elements of a Set using for...of loops, forEach method, or spread syntax.
                Example:
                const newSet = new Set([1, 2, 3]);

                // Using for...of loop
                for (const value of newSet) {
                    console.log(value);
                }

                // Using forEach method
                newSet.forEach(value => console.log(value));

                // Using spread syntax to convert Set to array
                const array = [...newSet];
                console.log(array); // Output: [1, 2, 3]

    Summary:
        A Set in ES6 is a collection of unique values, with methods to add, delete, and check for values,
        as well as to iterate over the values. It helps manage collections of data efficiently, ensuring
        there are no duplicates.

    Note: all older methods are still working as it is in ECMAScript(JavaScript).
    
*/

window.onload = function () {

    // creating set
    var names = new Set();

    // adding values to set
    names.add("Yasiru");
    names.add("Kalana").add("Sayuru").add("Ridma").add("Ridma"); // also you can add continiously like this || also same values(duplicates) will be eliminated and show only one in this sets

    // console set
    console.log("Names : ", names);

    // size method in set
    console.log("Name size : ", names.size);

    // delete from set
    names.delete("Sayuru"); // this returns boolean, if you want to check it console this statement.
    console.log("After Delete `Sayuru` : ",  names);

    // has method in set
    console.log("Is Ridma inside the set? : ", names.has("Ridma"));
    console.log("Is Sayuru inside the set? : ", names.has("Sayuru"));
    console.log("Is Batman inside the set? : ", names.has("Batman"));

    // clear all data from set
    names.clear();
    console.log("After clear set : ", names);


    // we can use set for remove duplicates in arrays
    var superHeros = ["superman", "batman", "flash", "wonderwoman", "flash", "greenlantern", "greenarrow", "flash"]; // there are three `flash` value in the array
    console.log("'superHeros' Array : ", superHeros);

    var refinedHeros = new Set(superHeros); // making set using superHeros array. this set doesn't contain now duplicates, because set always eliminate duplicates.
    console.log("After make 'refinedHeros' set using array : ", refinedHeros);

    superHeros = [...refinedHeros]; // now superHeros array takes without duplicates. using spread operator we can get individual values from set and insert into array.
    console.log("Updated 'superHeros' Array : ", superHeros);

};