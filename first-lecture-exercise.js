function membersList(firstName,lastName,age,city){
    var result = "";
    result += "Name :"+ firstName + " Lastname :" + lastName + " Age :" + age + " City :" + city; 
    return result;;
}

console.log(membersList("Tolga","Topkaç",24,"Kocaeli"));
console.log(membersList("Nisa","Genç",21,"Sakarya"));
console.log(membersList("Burak","Tünel",22,"Bursa"));
console.log(membersList("Betül","Uçar",37,"Uçar"));
