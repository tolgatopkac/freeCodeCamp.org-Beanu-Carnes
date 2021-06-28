/****************************************************************************************************************/

/* /*Store Multiple Values with Arrays */
// Arrays allow you to store several pieces of data in one place.

var ourArray = ['John',23];

var myArray = ['Quincy',1];

// Nested Arrays
// When one of the elements in an array another array, that's called a nested array or a multi-dimensional array

var ourArray = [['the universe',42], ['everything',101010]];

var myArray = [['Bulls', 23], ['White Sox',23]];

// Acces Array Data with Indexes

var ourArray = [50,60,70];
var ourData = ourArray[0]; // 50

var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData); // 50

// Modify Array Data With Indexes
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,64,99]

var myArray = [18,64,99];
myArray[0] = 45;
console.log(myArray); //[45,64,99];

// Acces Multi-Dimensional Arrays With Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
var myData = myArray[0][0]; // 1
 myData = myArray[2][1]; 
 console.log(myData); //8

// Manipulate Arrays with push()
var ourArray = ['Stimpson','J','cat'];
ourArray.push(['happy','joy']); // ourArray = ['Stimpson','J','cat',['happy','joy']]

var myArray = [['John',23],['cat',2]];
myArray.push(['dog',3]); //myArray = [['John',23],['cat',2],['dog',3]];

// Manipulate Arrays with pop()
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

var myArray = [['John',23],['cat',2]];
var removedFromOurArray = myArray.pop();
console.log(myArray); //[['John',23]]
// removedFromOurArray now equals ["cat",2], and ourArray now equals ['John',23]


// Manipulate Arrays with shift()
// The shift function is very similar to the pop function except it removes the first element of the array instead of the final element
var our = ["Stimpson","J",["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J",["cat"]]

var myArray = [["John",23],["dog",3]]
var removedFromOurArray = myArray.shift();
// removedFromOurArray now equals ["John",23] and ourArray now equals [["dog",3]]

// Manipulate Arrays with unshift()
// unshift() function is similar to the push() array function while push() adds an element to the end of the array unshift() adds at element to the beginning of the array
var ourArray = ["Stimpson","J", "cat"];
ourArray.shift(); //ourArray = ["J","cat"];
ourArray.unshift("Happy");
// ourArray now equals ["Happy","J","cat"]

var myArray = [["John",23],["dog",3]];
myArray.shift(); //myArray = [["dog",3]]
myArray.unshift(["Paul",35]); //myArray = [["Sad"],["dog",3]]

/****************************************************************************************************************/
// Shopping list
var myList = [["cereal",3],["milk",2],["banana",3],["juice",2],["eggs",12]];