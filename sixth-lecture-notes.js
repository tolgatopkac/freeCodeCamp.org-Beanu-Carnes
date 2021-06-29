/******************************************************************/
// LOOPS
// Loops allow you to run the same code multiple times. 

// Iterate with While Loops
var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray)

// Iterate with For Loops
// A for loop is the most common type of loop in javascript 

var ourArray = [];

for (var i = 0; i < 5; i++){
    ourArray.push(i);
}

var myArray = [];

for(var i = 1; i < 6; i++){
    myArray.push(i);
}

console.log(myArray);   // myArray = [1, 2, 3, 4, 5]

// Iterate Odd Numbers with a For Loop

var ourArray = [];

for(var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

console.log(ourArray); // [0,2,4,6,8]



var myArray = [];

for (var i = 1; i < 10; i += 2){
    myArray.push(i);
}

console.log(myArray); // [1,3,5,7,9 ]

// Count Backwards with a For Loop   

var ourArray = [];

for (var i = 10; i > 0; i -= 2){
    ourArray.push(i);
}

console.log(ourArray); // [10,8,6,4,2]


var myArray = [];

for(var i = 9; i > 0; i -=2){ 
    myArray.push(i);
}

console.log(myArray); //[9,7,5,3,1]

// Iterate Through an Array with a For Loop 
// It is common in JavaScript to iterate through the contents of an array. 

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for(var i = 0; i < ourArr.length; i++){
    ourTotal += ourArr[i]; 
}

console.log(ourTotal); // 42



var myArr = [2, 3, 4, 5, 6]; 
var total = 0;
for(var i = 0; i < myArray.length; i++){
    total += myArray[i]
}
console.log(total); // 20 

// Nesting For Loops  ---REPEAT---

function multiplyAll(arr){
    var product = 1;

    for(var i = 0; i < arr.length; i++){
        for(var j=0; j < arr[i].length; j++)
        product *= arr[i][j];
    }
    return product
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);  // 5040 

// Iterate with Do... While Loops
// while loop first checks the condition before it runs any code within the loop 
// Do while loop will always run at least one time and then it will check the condition

var myArray = [];
var i = 10;

while (i < 5){
    myArray.push(i);
    i++;
}

console.log(i, myArray); // 10 []

do {
    myArray.push(i);
    i++;
}while(i < 5) 

console.log(i,myArray); // 11 [10]


/***************************************************************/
// ------- EXERCISE -------  
// Profile Lookup ----REPEAT----

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number" : "0543236543",
        "likes" : ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number" : "0994372684",
        "likes" : ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number" : "0187345643",
        "likes" : ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number" : "unkown",
        "likes" : ["JavaScript", "Gaming", "Foxes"]
    }
];



function lookUpProfile(name,prob){
    for(var i = 0; i < contacts.length; i++){
         if(contacts[i].firstName === name){
            return contacts[i][prob] || "No such property "
         }
        
    }
    return "No such contact"
}

var data = lookUpProfile("Akira","likes");
console.log(data); //"[Pizza", "Coding", "Brownie Points"]


var data = lookUpProfile("Shirlock","number")
console.log(data); // No such contact
 