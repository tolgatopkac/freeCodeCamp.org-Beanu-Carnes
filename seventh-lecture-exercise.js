// EXERCISE  ---REPEAT---
//MakeList

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"] 
};

function makeList(arr){
    const resultDisplayArray = [];
    for(let i =0; i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning"> ${arr[i]}</li> `)
    }

    return resultDisplayArray
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

//Output 
// ["<li class=\"text-warning\"> no-var</li> ", "<li class=\"text-warning\"> var-on-top</li> ", "<li class=\"text-warning\"> linebreak</li> "]


 //---EXERCISE ---REPEAT---
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature
console.log(temp);