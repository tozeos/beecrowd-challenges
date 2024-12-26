var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// BEE 1096 | SEQUENCIA IJ 2

let i = 1,
	j = 7;

while (i < 10) {
	for (let a = 0; a < 3; a++) {
		console.log(`I=${i} J=${j}`);
		j--;
		if (j < 5) {
			j = 7;
		}
	}
	i += 2;
}

/* 

FORMA NOVA?
let i = 1,
	j = 7;

while (i < 10) {
	for (let a = 0; a < 3; a++) {
		console.log(`I=${i} J=${j}`);
		j--;
	}
	j += 3;
	i += 2;
}
 */
