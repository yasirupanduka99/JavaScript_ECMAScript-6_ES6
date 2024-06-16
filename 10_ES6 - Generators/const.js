/*

    ES6 Generators are special functions that can be used to control the iteration 
    behavior of a loop. Generators are defined using a function* declaration.

    Note: all older methods are still working as it is in ECMAScript(JavaScript).
    
*/

window.onload = function () {

    // first implement a regular function
    function regular() {
        console.log("pear");
        console.log("banana");
        console.log("apple");
    }

    regular(); // calling regular function to see consoled outputs


    // when comes to generators
    function* gen() {
        console.log("orange");
        console.log("pineapple");
        console.log("avacado");
    }

    gen(); // calling generator function, this not show output, because when we do generator it is not firing code block it is setting up code block.

    // lets call it correctly
    var myGen = gen(); // setting up gen() function
    myGen.next(); // command for run the generator function. now you can see console print the output



    // we can also pause these generator function
    function* gen2() {
        yield console.log("mango"); // using his yeild key word funnction pause in this statement.
        console.log("kingcocount");
        console.log("mangosteen");
    }

    var myGen2 = gen2();
    myGen2.next(); // you can only see mango, because function pause in that statement

    // how to resume pasued function now?
    myGen2.next(); // calling next() methd again is resume pasued generator function



    // accessing generator function values from outside
    function* gen3() {
        yield "cherry";
        yield "lemons";
        yield "raspberry"
        return "all done";
    }

    var myGen3 = gen3();
    console.log(myGen3.next()); // I'm acessing value, view console
    console.log(myGen3.next()); // I'm acessing value, view console
    console.log(myGen3.next()); // I'm acessing value, view console
    console.log(myGen3.next()); // I'm acessing value, view console


    // passing the value to the generator function
    function* gen4() {
        var x = yield "cherry";
        var y = yield "lemons";
        var z = yield "raspberry"
        return "total is ", x + y + z;
    }

    var myGen4 = gen4();
    console.log(myGen4.next()); // I'm not passing any value, view console
    console.log(myGen4.next(5)); // I'm passing value, view console
    console.log(myGen4.next(10)); // I'm passing value, view console
    console.log(myGen4.next(2)); // I'm passing value, view console




    // generator with asynchronus functions
    function* generator() {
        var tweets = yield $.getJSON("./json/tweets.json"); // this getting data method came from jQuery
        console.log(tweets);
        
        var friends = yield $.getJSON("./json/fb-friends.json"); // this getting data method came from jQuery
        console.log(friends);
        
        var ytVids = yield $.getJSON("./json/yt-videos.json"); // this getting data method came from jQuery
        console.log(ytVids);
    };

    function genWrapper(generator) {
        // set up generator / iterator
        var myGenerator = generator();

        // create function to handle the yield value
        function handle(yielded) {
            if(!yielded.done) {
                yielded.value.then(function(data) {
                    return handle(myGenerator.next(data));
                });
            }
        }// end handle

        // return handle function, passing in myGenerator.next
        return handle(myGenerator.next());

    }// end genWrapper


    // calling function
    genWrapper(generator);
    

};