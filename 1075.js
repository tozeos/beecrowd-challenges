var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

// 1075 | RESTO 2

var N = parseInt(lines);

for (let i = 0; i <= 10000; i++) {
    if(i%N == 2) {
        console.log(i)
    }
}


