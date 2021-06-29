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