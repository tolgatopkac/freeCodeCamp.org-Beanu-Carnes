// Customer list Name,lastname, age, city

var customersList = [["Caitlyn","Santos",34,"New York"],["Farah","Gallagher",21,"Los Angeles"],["Ashanti","Sampson","Boston",28],["Zayaan","Irvine",32,"Houston"]];

// Acces Array Data 
customersList[0]; // ["Caitlyn","Santos",34,"New York"]
customersList[2][3]; // 28

// Modify Array Data
customersList[1][3] = "Phoenix"
customersList[1][3]; // Phoenix

// push() 
customersList.push(["Ela","Dennis",37,"Edirne"]);
customerList[4]; // ["Ela", "Dennis", 37, "Edirne"]

// pop() 
customersList.pop();
customerList[4]; //undefined

// shift()
var shiftArray = customersList.shift();
shiftArray // ["Caitlyn","Santos",34,"New York"]
customerList[0]; // ["Farah", "Gallagher", 21, "Phoenix"]

// unshift() 
var unshift = customersList.unshift(["Caitlyn","Santos",34,"New York"])
customerList[0] ["Caitlyn", "Santos", 34, "New York"]