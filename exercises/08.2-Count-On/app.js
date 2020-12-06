let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let index = 0; index < myArray.length; index++){
    let element = myArray[index];
    // MAGIC HAPPENS HERE
    if (typeof(element) == "object") {
        hello.push(element);
    }    
    //doesn't work bc "TypeError: Object.isObject is not a function"
    // if (element instanceof Array && !Object.isObject(element)) {
    //     hello.push(element);
    // }
    
    // to differentiate objects from arrays:
    // if (element instanceof Object && !Array.isArray(element)) {
    //     hello.push(element);
    // }
    // another way of pushing objects -> from Ernesto
    // if (element instanceof Object) {
    //     hello.push(element);
    // }

}

console.log(hello)