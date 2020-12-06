let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

for (let i=0; i<par.length; i++) {
    let letterNumbers = par[i].toLowerCase();
    if (letterNumbers == " ") continue;
    if (counts[letterNumbers] == undefined) {
        counts[letterNumbers] = 1
    }
    else {
        counts[letterNumbers] += 1;
    }
}   





console.log(counts);