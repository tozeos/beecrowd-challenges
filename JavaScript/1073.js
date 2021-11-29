var input = require("fs").readFileSync("stdin", "utf8");

// BEE 1044 | QUADRADO DE PARES

let n = parseInt(input);
let a = 2;

do {
	console.log(`${a}^2 = ${Math.pow(a, 2)}`);
	a += 2;
} while (a <= n);
