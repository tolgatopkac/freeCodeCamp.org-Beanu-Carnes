/*************************************************************************/
/* COMMENTS 
// im-line comment 
var number = 5;
number = 9;
/* this is a multi-line comment */


/*************************************************************************/
/* Data Type : undefined, null, boolean, string, symbol, number, and object */ 
// undefined : undefined state of a variable
// null : nothing 
// boolean : true or false
// string : storing and manipulating text. 
// symbol : primitive value, unique
// number : one type of number. Numbers can be written with or without decimals.
// object : store a lot of different key value pairs
/*
var myName = 'Tolga';
myName = 15;

// three ways to declare a variable in JavaScript  - let, const and var - 
let ourName = 'freeCodeCamp';
const pi = 3.14;
*/
// difference between var, let, and const, 
// var is going to be able to be used throughout your whole program.
// let will only be used withing the scope of where you declared that.
// const is a variable that should never change

/*************************************************************************/
// Storing Values with Assignment Opeator
// There's diffrence between declaring variables and assigning variables

// var a;
// var b = 2;
// console.log(a); //a = null
// a = 7;
// b = a;
// console.log(a); //a = 7

/*************************************************************************/
// Initializing Variables w/ Assignment Operator
// var a = 9;

/*************************************************************************/
// Uninitialized Variables
// Initialize theses three variables
/*var a = 5;
var b = 10;
var c = "I am a";

a = a + 1 ; // 6
b = b + 5 ; // 15
c = c + 'String!'; // "I am a String!"
*/

/*************************************************************************/
// Case Sensitivity in Variables
// Variable names and function names in JavaScript are case sensitive.
// Generally common practice to use camelCase
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/*************************************************************************/
/*
// Adding Numbers
var sum = 10 + 10;
console.log(sum);

// Subtracting Numbers
var diffrence = 45 - 33;

// Multiplying Numbers
var product = 8 * 0;

// Dividing Numbers
var quotient = 66 / 0;

// Incrementing Numbers
var myVar = 87;
myVar = myVar + 1;
myVar++;

// Decrementing Numbers
var myNumber = 11;
myNumber = myNumber - 1;
myNumber--;

// Decimal Numbers - float Numbers
var ourDecimal = 5.7;
var myDecimal = 0.009;

// Multiply decimals
var product  = 2.0 * 2.5;
console.log(product); // 5

// Divide Numbers
var quotient = 4.4 / 2.0;
console.log(quotient); // 2.2

// Finding a Remainder
var remainder;
remainder = 11 % 3;
console.log(remainder); // 2;
//  The remainder operator is often used to determine if a number is even or odd.

// Compound Assignment with Augmented Addition
var a = 3;
var b = 17;
var c = 12;

a = a + 12; // 15
a += 12; 
b = 9 + b; // 26
b +=9;
c = c + 7; // 19
c +=7;

// Compound Assignment with Augmented Subtraction
var a = 3;
var b = 17;
var c = 12;

a = a - 12; // 15
a -= 12; 
b = 9 - b; // 26
b -=9;
c = c - 7; // 19
c -=7;

// Compound Assignment with Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;

a = a * 5;
a *=5;

b = 3 * b;
b *=3;

c = c * 10;
c *= 10;

// Compound Assignment with Augmented Division
var a = 48;
var b = 108;
var c = 33;

a = a / 12; 
a /= 12;

b = b / 4;
b /= 4;

c = c / 11;
c /= 11;
*/

/*************************************************************************/
// Declare String Variables

// var firstName = "Alan";
// var lastName = "Turing";

// var myFirstName = "Tolga";
// var myLastName = "Topkaç"

/*************************************************************************/
// Escaping Literal Quotes in String

/* var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

// Quoting Strings with Single Quotes
var myStr = '<a href="http://wwww.example.com" target="_blank">Link</a>';
 */
// Escape Sequences in Strings ---REPEAT HERE---
/*****
 CODE OUTPUT
 \' single quote
 \ " double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed 
 *****/

//  var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

/*************************************************************************/
//Concatenating Strings with Plus Operator

var ourStr = "I come first. " + "I come second.";

var myStr = "This is the start. " + "This is the end.";

console.log(myStr);

//Concatenating Strings with Plus Equals Operator
var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. "
myStr += "This is the second sentence."

console.log(myStr);

// Değişkenlerle Dize Oluşturma
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Tolga";
var myStr = "My name is " + myName + " and I am well!";

// Appending Variables to Strings
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "worthwhile"; 
var myStr = "Learning to code is ";

myStr += someAdjective;

// Find Length of String
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

// Bracket Notation to Find First Character in String
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

// String Immutability
var myStr = "Jello World";

// myStr[0] = "H";
myStr = "Hello World";

// Bracket Notation to Find Nth Character in String

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];  // d

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2] // v

// Bracket Notation to Find Last Character in String

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1]; // a

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];  // e

// Bracket Notation to Find Nth-to-Last Character in String
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3]; // A

var lastName = "LoveLace";
var thirdToLastLetterOfLastName = lastName[lastName.length - 8] // L

// Word Blanks 

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb 
    return result;
    
}
console.log(wordBlanks("dog", "big", "ran","quickly"));
console.log(wordBlanks("bike", "slow", "flew","slowly"));