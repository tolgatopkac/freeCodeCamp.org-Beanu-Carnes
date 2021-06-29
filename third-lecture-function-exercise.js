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


// Exercise - Customer Line

function customerLine(arr,person){
     arr.shift();
    return arr.unshift(person);
    

}

var customerList = ["Jason","Colt","Dean","Jenny"];

console.log("Before: " + customerList);
console.log(customerLine(customerList,"Niece"));
console.log("After: " + customerList);

// I removed the customer in the first row and added another customer in the first row.
// Output
// Before: Jason,Colt,Dean,Jenny
// After: Niece,Colt,Dean,Jenny
