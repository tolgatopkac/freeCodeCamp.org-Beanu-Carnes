/*********************************************************************************************************/

// Boolean Values
// Booleans are another datatype in JavaScript. There are only two values, true or false.

function welcomeToBooleans() {
    return false;
    // return true;
}

// Use Conditional Logic with If Statements
// An if statement is used to make decisions in code.  

function ourTrueOrFalse(isItTrue){
    if(isItTrue){
        return "Yes, it's true";
    }
    return "No, it'is false";
}

ourTrueOrFalse(true) //true
ourTrueOrFalse(false) //false


function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
        return "Yes, that was true"
    }
    return "No, that was false"
}

console.log(trueOrFalse(true)); // Yes,that was true

// Comparison with the Equality Operator

function testEqual(val){
    if(val == 12){
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10); // Not Equal
testEqual(12); // Equal

// Comparison with the Strict Equality Operator 
// equality operator which is the double equal == sign.
// strict equality operator, the triple equal sign === 

// 3 == 3 > true
// 3 == '3' > true
// 3 === 3 > true
// 3 === '3' > false

function testStrict(val){
    if(val === 7){
        return "Equal";
    }
    return "Not Equal";
}
testStrict(7) // true
testStrict('7') //false

// Practice Comparing Different Values

function compareEquality(a,b){
    if(a == b){
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10,"10")); 

// Comparison with the Inequality Operator
function testNotEqual(val) {
    if(val != 99){
        return 'Not Equal';
    }
    return "Equal";
}
console.log(testNotEqual(10)); "Not Equal";

// Comparison with the Strict Inequality Operator
// !==
function testStrictNotEqual(val){
    if (val !== 17) {
        return 'Not Equal';
    }
    return 'Equal';
}

console.log(testStrictNotEqual(10));  // Not Equal 

// Comparisons with the Logical and Operator

function testGreaterThan(val){
    if(val > 100){
        return 'Over 100';
    }

    if(val > 10 ){
        return "10 or Under";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10));  // "10 or Under"

// Comparison with the Greater Than Or Equal To Operator
 
function testGreaterOrEqual(val){
    if(val >= 20){
        return '20 or Over';
    }

    if(val >= 10){
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterThan(10)); // 10 or Over

// Comparison with the Less Than Operator 

function testLessThan(val){
    if(val < 25){
        return "Under 25";
    }

    if (val < 55 ) {
        return "Under 55";
    }
    return "55 or Over";
}

console.log(testLessThan(10));  //Under 25

//  Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
    if(val <= 12){
        return "Smaller Than or Equal to 12";
    }
    
    if(val <= 24){
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

console.log(testLessOrEqual(10)); // "Smaller Than or Equal to 12";


// Comparisons with the Logical And Operator  &&
function testLogicalAnd(val){

    if(val <= 50 && val >= 25){
      return "Yes"
    }
    return "No";
}

testLogicalAnd(10)


// Comparisons with the Logical Or Operator ||

function testLogicalOr(val){

    if(val < 10 || val > 20){
        return "Outside";
    }
    return "Inside"
}

testLogicalOr(15);  // Inside


// ELSE Statements
function testElse(val){
    var result = "";

    if(val > 5){
        result = "Bigger than 5";
    }else{
        result = "5 or Smaller";
    }
    return result; 

}

testelse(4);  // 5 or smaller

// Else if Statements
// multiple conditions that need to be addressed, you can use else if statements. 

function testElseIf(val){
    if(val > 10){
        return "Greater than 10";
    } else if(val < 5) {
        return "Smaller than 5";
    }else{
        return "Between 5 and 10";
    }
}
testElseIf(2)  // Smaller than 5

// Logical Order in If Else Statements

function orderMyLogic(val){
    if(val < 5){
        return "Less than 5";
    }else if (val < 10){
        return "Less than 10";
    }else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(3));

// Chaining If Else Statements

 
testSize(7); //Small
testSize(34); //Huge

/********************************EXERCISE ********************************/
// Golf Code

var names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"];

function golfScore(par,strokes){
    if(strokes == 1){
        return names[0]
    }else if(strokes <= par - 2){
        return names[1]
    }else if(strokes <= par - 1){
        return names[2]
    }else if(strokes <= par){
        return names[3]
    }else if (strokes <= par + 1){
        return names[4]
    }else if (strokes <= par + 2){
        return names[5]
    }else if (strokes <= par + 3){
        return names[6];
    }
}

golfScore(5,4);

// Switch Statements
// Instead of using chained else if statements you can use a switch statement

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2: 
            answer ="beta";
            break;
        case 3:
            answer ="gamma";
            break;
        case 4:
            answer ="delta";
            break; 

    }
    return answer;
}

caseInSwitch(1);  //alpha 

// Default Option in Switch Statements
function switchOfStuff(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "apple";
            break;
        case b: 
            answer ="bird";
            break;
        case c:
            answer ="cat";
            break;
        default:
            answer = "stuff";
            break;

    }
    return answer;
}

switchOfStuff('a');

// Multiple Identical Options in Switch Statements

function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer ="Low";
            break;
        case 4:
        case 5:
        case 6:
            answer ="Mid";
            break;

        case 7:
        case 8:
        case 9:
            answer ="High ";
            break;
    }
    return answer;
}

console.log(sequentialSizes(8));

// Replacing If Else Chains with Switch
function chainToSwitch(val){
    var answer = "";

    if(val === "bob"){
        answer ="Marley";
    }else if(val === 42){
        answer ="The Answer";
    }else if(val === 1){
        answer = "There is no #1";
    }else if(val === 99){
        answer = "Missed me by this much!";
    }else if(val === 7){
        answer = "Ate Nine";
    }
    return answer;
}

function chainToSwitchh(val){
    var answer = "";

    switch(val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer ="The Answer";
            break;
        case 1:
            answer ="There is no #1";
            break;
        case 99:
            answer ="Missed me by this much!";
            break;
        case 7:
            answer ="Ate Nine";
            break;
    }
    return answer;
}


chainToSwitchh(42) //"The Answer" 

// Returning Boolean Values from Functions

function isLess(a,b){
    return a < b;
    // if(a < b){
    //     return true;
    // }else {
    //     return false;
    // }
}

isLess(10,15); //true
isLess(20,15); //false


// Returning Early Pattern from Functions   ------------ REPEAT ------------
// you can return early from a function with the return statement

function abTest(a,b){

    if(a < 0 || b < 0){
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b),2));
}
abTest(2,2);  // 8
abTest(-2,2); //undefined

/********************************EXERCISE ********************************/
// Counting Cards
// when you see low card the count goes up
//when you see a high card the count goes down
// if it's a middle value card, the count stays the same.
 var count = 0;

 function cc(card){
     switch(card){
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
             count++
             break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
             count--;
             break;
        
     }
     var holdbet = "Hold"
     if(count > 0){
         holdbet = "Bet";
     }

    return count + " " + holdbet;
     }

 cc(2); cc(3); cc(4); cc("K"); cc('A'); 
 console.log(cc(4));