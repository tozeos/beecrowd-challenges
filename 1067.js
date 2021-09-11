var input = require("fs").readFileSync("stdin", "utf8");

// URI 1067 | NÚMEROS ÍMPARES

input = parseInt(input)

for (let i = 1; i <= input; i++) {
        if(i % 2 !== 0) {
            console.log(i)
        }
}