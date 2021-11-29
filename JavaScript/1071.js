var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\r");

// BEE 1071 | SOMA DE IMPARES CONSECUTIVOS I

var x = parseInt(lines.shift());
var y = parseInt(lines.shift());
var num = 0;
var sum = 0;
var i = 0;

if (x < y) {
	num = x + 1;
	i = y;
} else if (x > y) {
	num = y + 1;
	i = x;
}

while (num < i) {
	if (num % 2 != 0) {
		sum += num;
	}

	num++;
}

console.log(sum);
