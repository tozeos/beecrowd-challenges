var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// BEE 1095 | SEQUENCIA IJ 1

let i = 1;

for (let j = 60; j >= 0; j--) {
	if (j % 5 === 0) {
		console.log(`I=${i} J=${j}`);
		i += 3;
	}
}
