var input = require("fs").readFileSync("stdin", "utf8");

// URI 1044 | Quadrado de Pares

let n = parseInt(input);
let a = 2;

do {
    console.log(`${a}^2 = ${Math.pow(a, 2)}`)
    a+=2;
} while (a <= n);