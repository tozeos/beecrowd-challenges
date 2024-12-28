var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// BEE 1145 | LOGICAL SEQUENCE 2

let values = input.split(" ");
let x = parseInt(values.shift());
let y = parseInt(values.shift());
let result = "";

for (let i = 1; i <= y; i++) {
	result += i + (i % x != 0 ? " " : i != y ? "\n" : "");
}

console.log(result);
