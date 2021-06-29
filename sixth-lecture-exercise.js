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
 