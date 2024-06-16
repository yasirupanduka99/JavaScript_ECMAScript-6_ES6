/*

    New String Methods
    - repeat
    - startsWith
    - endsWith
    - includes

    Note: all older methods are still working as it is in ECMAScript(JavaScript).
    
*/

window.onload = function () {

    // Practise --- 1
    var str = "sample text ";

    // repeat method
    console.log(str.repeat(5)); // This repeat method repeat string with number as we entered in repeat method parameter

    // startsWith method
    console.log(str.startsWith("sample")); // startsWith method always return boolean values(true or false). this check is string start with given string.
    console.log(str.startsWith("mple")); // this will throw false. because string doesn't start with `mple`
    console.log(str.startsWith("mple", 2)); // but this will throw true, because we give second parameter which is start position value

    var youSay = "hi! how are you?";

    if(youSay.startsWith("hi! how")) {
        var iSay = "hello, I'm good!";
    }

    console.log(`you say ${youSay}, I say ${iSay}`);

    // endsWith method
    console.log(str.endsWith("ext ")); // endsWith method is also a return boolean values(true or false). this check is string end with given string.
    console.log(str.endsWith("sampl")); // this will throw false. because string doesn't end with given `sampl` string
    console.log(str.endsWith("sampl", str.length-7)); // but this will throw true, because we give second parameter which is end position value

    // includes method - simillar to startsWith & endsWith this is also returning boolean values(true or false)
    console.log(str.includes("sample")); // This includes check this `sample` text is really inside the str string. if found then return true, otherwise return false
    console.log(str.includes("batman")); // returning false
    console.log(str.includes("te")); // returning true.


};