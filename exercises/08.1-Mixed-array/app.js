var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
var newArray = []
for (let i=0; i < mix.length; i++) {
    // console.log(typeof mix[i]);
    newArray.push(typeof mix[i])
}

console.log(newArray)
