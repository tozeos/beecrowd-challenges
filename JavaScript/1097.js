var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// BEE 1097 | SEQUENCIA IJ 3

let i = 1,
	j = 7;

while (i < 10) {
	for (let a = 0; a < 3; a++) {
		console.log(`I=${i} J=${j}`);
		j--;
	}
	j += 5;
	i += 2;
}
