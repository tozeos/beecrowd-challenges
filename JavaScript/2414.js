var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 2414 | DESAFIO DO MAIOR NÚMERO

let highest = 0;
let count = 0;

let n = lines
	.shift()
	.trim()
	.split(" ")
	.map((x) => parseInt(x));

while (n[count] != 0) {
	if (n[count] > highest) {
		highest = n[count];
	}
	count++;
}

console.log(highest);
