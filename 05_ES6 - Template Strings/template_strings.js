/*

    Template strings, also known as template literals, are a feature in JavaScript that allows for 
    easier and more readable string interpolation and multi-line strings. They are enclosed by backticks (` `) instead of single or double quotes.

    Key Features of Template Strings:

        1. String Interpolation:
            Template strings allow you to embed expressions directly within the string using ${} syntax.
                Example:
                const name = 'Alice';
                const greeting = `Hello, ${name}!`;
                console.log(greeting); // Output: Hello, Alice!

        2. Multi-line Strings:
            Template strings can span multiple lines without the need for escape characters or concatenation.
                Example:
                const multiLine = `This is a string
                that spans multiple
                lines.`;
                console.log(multiLine);
                // Output:
                // This is a string
                // that spans multiple
                // lines.

        3. Expression Evaluation:
            You can include any valid JavaScript expression within the ${} syntax, and it will be evaluated and included in the resulting string.
                Example:
                const a = 5;
                const b = 10;
                const result = `The sum of ${a} and ${b} is ${a + b}.`;
                console.log(result); // Output: The sum of 5 and 10 is 15.

        4. Tagged Templates:
            Tagged templates allow you to parse template literals with a function. The function can process the literal parts and the interpolated expressions.
                Example:
                function highlight(strings, ...values) {
                    return strings.reduce((result, string, i) => {
                        return `${result}${string}<span class="highlight">${values[i] || ''}</span>`;
                    }, '');
                }
                const name = 'Bob';
                const age = 30;
                const message = highlight`Name: ${name}, Age: ${age}`;
                console.log(message);
                // Output: Name: <span class="highlight">Bob</span>, Age: <span class="highlight">30</span>
    
*/

window.onload = function () {

    // Practise --- 1
    var normalString = 'This is single quatation string'; // Single quatation string
    var normalString2 = "This is double quatation string"; // Double quatation string
    var tempString = `This is string using backticks(template string)`; // Strings between backticks -this is how template string make.
    
    console.log(normalString);
    console.log(normalString2);
    console.log(tempString);

    // Template string can do line breaks, that means template string don not ignore whitespaces and line breaks
    var about = `My name is yasiru
I'm From Sri Lanka
I like to eat healthy food

I'm learning JavaScript(ECMAScript).
I love programming and making games and web applications`;
                console.log(about);

    // Also template string can embended expression -it is very cool
    function logHero(name, age) {
        console.log("My name is " + name + " and my age is " + age + "."); // This is how normal way to do it. concatinate every elements we need
        console.log(`My name is ${name} and my age is ${age} and I have ${2 + 2} dollars.`); // This is how it done using template string(backticks)
    }

    logHero("Yasiru", 24);

};