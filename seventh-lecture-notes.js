/***************************************************************/
// Generate Random Fractions -random numbers

function randomFractions (){

    return Math.random()
}

console.log(randomFractions()); // it's always going to be a number between 0 and it could be 0


// Generate Random Whole Numbers 
var randomNumberBetween0and19 = Math.floor(Math.random() * 20); 
// this is going to create a random whole numnber between 0 and 19
//Math.random can be zero but can never 1
// multiply it by 20 we're going to get a number between 0 and 20, but not including 20

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());


// Generate Random Whole Numbers within a Range   
// ---REPEAT---

function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1) + ourMin);
}

ourRandomRange(1,9)


//------
function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
} 

var myRandom = randomRange(5, 15);

console.log(myRandom);

// Use the parseInt Function 
// It takes a string and returns an integer
// If the string cannot be converted into an integer it returns in NaN = Not a Number

function convertToInteger(str){
    return parseInt(str);
}
convertToInteger("56")


// Use the parseInt Function with a Radix
// The parseInt function can also be used with a radix.

function convertToInteger(str){
 return parseInt(str,2)
}

convertToInteger("10011");

// Use the Conditional (Ternary) Operator

// condition ? statement-if-true : statement-if-false;

function checkEqual(a,b){
    return a === b ? true : false;
    // if(a === b){
    //     return true;
    // }else {
    //     return false; 
    // }
}

checkEqual(1,2);

// Use Multiple Conditional (Ternary) Operator
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

checkSign(-2); //negative
checkSign(2); //positive
checkSign(0); //zero


// Difference Between the var and let Keywords
var catName = "Quincy";
var catName = "Beaa";
    //--- just allowing us to set the catName twice and declare it twice with the var keyword.

let catName = "A";
let catName = "B";
    //--- Error, you can't duplicate declaration "catname"

function catTalk() {
    "use strict";
    //---enables strict mode which catches common coding mistakes and unsafe
    catName = "Oliver";
    quote = catName + " says Meow!";

}

// Compare Scopes of the var and let Keywords 
    //--- difference between the var and let keywords  is that when you declare a variable with var it is declared globally or locally if declared inside a function. However, let - the scope of let is limited to the block statement or expression that it was declared in.
function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i; 
}

checkScope();
// Output 
// Block scope i is : "block scope"
// Function scope i is : "block scope"

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let  i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i; 
}

checkScope();

    // Output 
    // Block scope i is : "block scope"
    // Function scope i is : "function scope"


// Declare a Read-only Variable with the const keyword
    //--cannot reassign a const
    //--If you know for sure that you never want to reassign a variable, always use const. 
    //--When you're using const it's very common to use all capital letters 


// Mutate an Array Declared with const 
    //-- while you cannot reassign a variable declare with const yu can mutate an array. 

const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    // s = [2, 5, 7]; ERROR

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    
}
editInPlace();

console.log(s); // [2,5,7]

// Prevent Object Mutation 
    //--if you have an object or an array, you can still mutate it even if it's declared with const. 
    //-- there is something called object.freeze that will prevent data mutation   

function freeObj(){
    "use strict";
    const MATH_CONSTANT = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANT);
}

// Arrow Functions to Write Concise Anonymous Functions 

    //--anonymous function it doesn't have a name
    //--whenever you have an anonymous function you can convert it into an arrow function
    var magic = function(){
        return new Date();
    }; 

    // var magic = () => {
    //      new Date(); 
    // };

    const magic = () => new Date();
    //-- we don't even need the return keyword and we don't need the curly braces.

// Write Arrow Functions with Parameters
var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));


const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));
// output > [1, 2, 3, 4, 5]

// Write Higher Order Arrow Functions ---REPEAT---
    //--- take functions as arguments for processing collections of data
    //--- whenever one function takes another function as an argument, that's a good time for an arrow function
    //--- map function takes a function as its argument

let realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

let squareList = (arr) => {
    let squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

let squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// OUTPUT 
// [16, 1764, 36]

// Write Higher Order Arrow Functions
const increment = (function() {
    return function increment(number, value = 1){
        //-- if a value isn't passed in it will be set to 1 automaticallly
        return number + value;
    };
})();
console.log(increment(5, 2));  // 7
console.log(increment(5)); // 6


// Use the Rest Operator with Function Parameters ---REPEAT---
    //-- Rest operator allows you to create a function a variable number of arguments
    //-- The rest operator is three dots.

const sum = (function() {
    return function sum (x, y, z){
        const args = [x, y, z];
        //--- it taking three arguments x,y and z and it's summing them
        //--- first it's converting these x, y, z into an array called args
        // then it's reducing them
        return args.reduce((a, b) => a + b, 0);  //it's summing them all up here and then returning the results
    };
})(); 
console.log(sum(1, 2, 3)); // 6

    //-- can change this to use the rest operator

    
const sum = (function() {
    return function sum (...args){
            //--- that's rest operator just ...args
            //--- rest operator ... it will convert everything that's passed in into one array and the array is called args
        return args.reduce((a, b) => a + b, 0);  
    };
})(); 
            //-- can also now add any number of numbers
console.log(sum(1, 2, 3, 4)); // 6


// Use the Spread Operator to Evaluate Arrays In-Place
    //-- The spread operator looks just like the rest operator but it expands an already existing array or it spreads out an array. it takes an array and spreads it out into its individual parts.

const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function(){
    arr2 = arr1; 
    arr1[0] = 'potato'
})();
console.log(arr2);
// Output 
// ["potato", "FEB", "MAR", "APR", "MAY"]

const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function(){
    arr2 = [...arr1]; 
    arr1[0] = 'potato'
})();
console.log(arr2);
// Output
//  ["JAN", "FEB", "MAR", "APR", "MAY"]

// Use Destructuring Assignment to Assign Variables from Objects  ---REPEAT---
    //--- this is special syntax for neatly assigning values taken directly from an object to a variable

var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x;    // x = 3.6
var y = voxel.y;    // y = 7.4   
var z = voxel.z;    // z = 6.54

const {x : a, y : b, z : c} = voxel; // a = 3.6, b = 7.4, c = 6.54
    //--- the destructuring syntax right here
    //--- this is just a quicker way of assigning things from an object into variables


//----
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){
    "use strict";

    // const tempOfTomorrow = undefined;
    const {tomorrow : tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); //79


// Destructuring Assignment with Nested Objects ---REPEAT---
    // --- can also use destructuring assignment to assign variables from nested objets

const LOCAL_FORECAST = {
    today : { min: 72, max: 83},
    tomorrow : { min:73.3, max: 84.6}
};


function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow: { max : maxOfTomorrow }}= forecast;  //???

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));  //84.5


// Use Destructuring Assignment to Assign Variables from Arrays  ---REPEAT---
    //--- can use destructuring assignment to assign variables from arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);
// 1,2,4



    //--can use destructuring of arrays to switch the places of variables
let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]
    //--instead of a being 8 and b equals 6, it's now going to log out 6 and 8.
}) ();

console.log(a);  //6
console.log(b); //8


//Use Destructuring Assignment with the Rest Operator  ---REPEAT---
    //--can use destructuring assignment with the rest operator to reassign array elements

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
    
    const [ , ,...arr] = list;

    return arr;
}

const arr = removeFirstTwo(source); 
console.log(arr); // [3, 4, 5, 6, 7, 8, 9, 10]
console.log(source); // [1,2,3,4,5,6,7,8,9,10];


// Use Destructuring Assignment to Pass an Object as a Function's Parameters  ---REPEAT--- ???
    // --- can use destructuring assignment to pass an object as a function's parameter.
    // --- this is commonly used with API calls.
  

const stats = {
    max : 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function(){

    return function half({max, min}) {
        return(max + min) / 2.0;
    };

})();

console.log(stats);
console.log(half(stats));


// Create Strings using Template Literals
    //-- Template literals are a special type of string that makes creating complex strings easier.

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

    //--Template literal with multi-line and string interpolation

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
// Hello, my name is Zodiac Hasbro! I am 56 years old.

// EXERCISE  ---REPEAT---
//MakeList

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"] 
};

function makeList(arr){
    const resultDisplayArray = [];
    for(let i =0; i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning"> ${arr[i]}</li> `)
    }

    return resultDisplayArray
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

//Output 
// ["<li class=\"text-warning\"> no-var</li> ", "<li class=\"text-warning\"> var-on-top</li> ", "<li class=\"text-warning\"> linebreak</li> "]



// Write Concise Object Literal Declarations Using Simple Fields

const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
}

console.log(createPerson("Zodiac Hasbro", 56, "male"));

    //--there's a way to just make this simpler.

const createPerson = (name,age,gender) => ({name,age,gender});
console.log(createPerson("Zodiac Hasbro", 56, "male"));

// Write Declarative Functions
    //-- An object can contain a function

// Long way
    const bicycle = {
        gear: 2,
        setGear: function(newGear){
            "use strict";
            this.gear = newGear;
        }
    };

    bicycle.setGear(3);
    console.log(bicycle.gear);

// simpler way

const bicycle = {
        gear: 2,
        setGear(newGear){
            "use strict";
            this.gear = newGear;
        }
    };

    bicycle.setGear(3);
    console.log(bicycle.gear);



// Use class Syntax to Define a Constructor Function   ---REPEAT---
    //-- ES6 provides a syntax to create objects using the class keyword
    //--older way
    //--- can instantiate an object using this new keyword
    //--- class syntax replaces the constructor function creation

var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

// with class syntax 
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);



    //---
function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); //carrot


// Use getters and setters to Control Access to an Object. ---REPEAT---
    //--- with the classs object you often want to obtain values from the object and set a value of a property within an object. This are often called getters and setters


class Book {
    constructor(author) {
        this._author = author
    }
    //have a getter and setter to get and set the writer so can get the writer and can set the writer.
        //--getter functions are meant to simply return or get the value of an object'S private variable to the user without the user directly accessing the private variable.
    get writer(){
        return this._author;
    }

        //--setter
    set writer(updateAuthor){
        this._author = updateAuthor;
    }
}




    //---EXERCISE ---REPEAT---
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature
console.log(temp);



// Understand the Differences Between import and require
    //--export --import   
// Use export to Reuse a Code Block 
// Use * to import Everthing from a file
// Create an Export Fallback with export default
// Import a default export 