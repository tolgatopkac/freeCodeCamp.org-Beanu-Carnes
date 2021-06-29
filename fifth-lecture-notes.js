/***************************************************************/
// Build JavaScript Objects
// -- Properties are everything before the colons. (name,legs,tails,friends)
// -- The values are the things after the colons here. ("Camper",4,1,["everything!"])
// -- properties can be string, numbers, arrays. They can be any datatype in JavaScript
var ourDog = {
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["everything!"]
};

var myDog = {
    'name':'Quincy',
    'legs':3,
    'tail':2,
    'friends':[]
};

// Accessing Object Properties with Dot Notation
// -- There are two main ways to acces a property on an object.
// -- 1)  dot notation

var testObj = {
    'hat' : 'ballcap',
    'shirt' : 'jersey',
    'shoes' : 'cleats'
};

var hatValue = testObj.hat; // 'ballcap'
var shirtValue = testObj.shirt;   //'jersey'

// Accesing Object Properties with Bracket Notation 
// -- Besides using dot notation you can also use bracket notation to access a property in a object 
// -- You can use bracket notation anytime but it is required if the name has a space in it. ("an entree", "my side")
var testObj = {
    "an entree" : "hamburger",
    "my side" : "veggies",
    "the drink" : "water"
};

var entreeValue = testObj["an entree"]; // "hamburger"
var drinkValue = testObj["the drink"] // "water"

// Accessing Object Properties with Variables   -------REPEAT--------
// Bracket notation can also be used to look up object properties using variables.

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber]; // Montana 

// Updating Object Properties
// can use dot notation to update object properties
var ourDog = {
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["everything!"]
};
ourDog.name = "Happy Camper"; //ourDog new name : "Happy Camper"

var myDog = {
    'name':'Coder',
    'legs':3,
    'tail':2,
    'friends':["freeCodeCamp Campers"]
}; 

myDog.name = "Happy Coder";

// Add New Properties to an Object 
// can add new properties to an object using dot notation or bracket notation 

var ourDog = {
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["everything!"]
};

ourDog.bark = "bow-wow"; //now it has 5 properties.

var myDog = {
    'name':'Happy Coder',
    'legs':4,
    'tail':1,
    'friends':["freeCodeCamp Campers"]
}; 

myDog['bark'] = "woof!";

// Delete Properties From an Object

var ourDog = {
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["everything!"],
    "bark" : "bow-wow", //deleted
};

delete ourDog.bark

var myDog = {
    'name':'Happy Coder',
    'legs':4,
    'tail':1, //deleted
    'friends':["freeCodeCamp Campers"],
    "bark":"woof!"
}; 

delete myDog.tail

// Using Object for Lookups ---REPEAT----
// Object can be thought of as a key value storage like a dictionary

function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "delta" : "Denver",
        "echo" : "Easy",
        "foxtrot" : "Frank"
    };
result = lookup[val]; 

return result;


}
phoneticLookup("charlie"); //Chicago
phoneticLookup("foxtrot "); //frank


// Testing Objects for Properties ---REPEAT---
// can check if an object has a property with the hasown property method.
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed : "sleigh"
};

function checkObj(checkProb){
    if(myObj.hasOwnProperty(checkProb)){
        return myObj[checkProb];
    }else{
        return "Not Found";
    }

}

console.log(checkObj("gift"));

// Manipulating Complex Objects ---REPEAT---
// JavaScript object is a way to store flexible data. can store strings,numbers and arrays and other objects
var myMusic =[
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist":"Beanu Carnes",
        "title":"Cereal Man",
        "release_year":"2003",
        "formats":[
            "YouTube video"
        ]
    }
];

// Accessing Nested Objects
// -- in order to access sub-properties of an object you can chain together the dot or bracket notation.
var myStorage = {
    "car": {
        "inside":{
            "glove box":"maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]
console.log(gloveBoxContents);

// Accessing Nested Arrays   ---REPEAT---
var myPlants = [
    {
        type: "flowers",
        list:[
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1]; //pine.


/***************************************************************/
// ------- EXERCISE -------
//Record Collection ---REPEAT--- 
var collection = {
    "2548":{
        "album": "Slippery When We",
        "artist": "Bon Jovi",
        "tracks" : [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album" : "1999",
        "artist" : "Prince",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks" : [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// it's going to update collection and then return the collection
// if an empty string for the value, it should just completely delete that property
// if we have the property of tracks and then we have a value instead of updating the whole tracks here with what we put in it just going to add the track to the end of this array
var collectionCopy = JSON.parse(JSON.stringify(collection))

function updateRecords(id, prop, value){ // updating this function here
    if(value === ""){ 
        delete collection[id][prop];
    } else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }

    return collection;
}

updateRecords(2468,"tracks","test");
updateRecords(5439,"artist","ABBA")