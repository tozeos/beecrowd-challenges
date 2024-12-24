var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 1165 | NÚMERO PRIMO
// DEIXAR PRA DEPOIS

let N = parseInt(input.split("\n"));
let number = lines
	.shift()
	.trim()
	.split(" ")
	.map((x) => parseInt(x));

console.log(number);
