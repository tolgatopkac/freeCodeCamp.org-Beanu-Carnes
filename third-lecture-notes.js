/*********************************************************************************************************************************/
// Functions

// Write Reusable Code with functions
// Functions allow us to create reusable code in JavaScript.

function ourReusableFunction(){
    console.log("Heyya, World");
}

ourReusableFunction();
//"Heyya, World"

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();
//Hi World

//Passing Values to Functions with Arguments
function ourFunctionWithArgs(a,b){
    console.log(a - b);
}

ourFunctionWithArgs(10-5); // Outputs 5

function functionWithArgs(a,b){
    console.log(a + b);
}

functionWithArgs(10,5); //Outputs 15

// Global Scope and Functions   ---------------- REPEAT ---------------------
// --Scope refers to the visibility of variables.
// --Variables which are defined outside of a function block have global scope.
// --Global scope means they can be seen everywhere in your JavaScript.

var myGlobal = 10;

function fun1(){
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5; 
    // there's no var keyword, it becomes global automaticallly
    // we put the var keyword, then oopsGlobal would equal "undefined"
}

function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal; // 10
    }
    if(typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal; // 5
    }
    console.log(output);
}

func1();
func2();

// Local Scope and Functions  ---------------- REPEAT ---------------------
function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();  // 5 
console.log(myVar);  // not defined. --ERROR--

// Global vs. Local Scope in Functions  ---------------- REPEAT --------------------- 
// It is possible to have both local and global variables with the same name.

var outerWear = "T-Shirt";  //Global Variable

function myOutFit() {
    // var outerWear = "sweater";
    return outerWear;
}

console.log(myOutFit());  /// >>>> "T-Shirt"

var outerWear = "T-Shirt";  //Global Variable

function myOutFit() {
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutFit()); // >>> "sweater"

// Return a Value from a Function with Return

function minusSeven(num) {
    return num - 7 ;
}
console.log(minusSeven(10)); // 3

function timesFive(num){
    return num * 5;
}

console.log(timesFive(5)); // 25;


// Understanding Undefined Value Returned from a Function
// They aren't return anything, undefined 
var sum = 0; //Global variable.
function addThree(){
    sum = sum + 3;
}

function addFive(){
    sum += 5;
}

// Assignment with a Returned Value

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = changed(10);


var processed = 0 ;
function processArg(num){
    return(num + 3) / 5;
}

processed = processArg(7)

// Exercise - Stand in Line
// -- In computer science a cue is an abstract data structure where items are kept in order.

function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

// JSON.stringify is just a way to change an array into a string that can easily be printed out to the screen.
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));


// Output 
// Before : [1,2,3,4,5]
// 1 
// After : [2,3,4,5,6]