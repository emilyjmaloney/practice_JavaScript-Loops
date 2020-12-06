var arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
// for(let i = 0; i<=10;i++){
//         your loop content here
// }
//*****************

for (let i = 0; i<10; i++) {
    // console.log("hello")
    var tenRandom = Math.floor(Math.random() * 800)
    arr.push(tenRandom)
}


console.log(arr);