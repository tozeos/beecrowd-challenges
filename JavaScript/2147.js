var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// BEE 2147 | GALOPEIRA

let C = lines.shift();

for (let i = 0; i < C; i++) {
	let galopeira = lines.shift().trim();
	let T = galopeira.length * 0.01;
	console.log(T.toFixed(2));
}
