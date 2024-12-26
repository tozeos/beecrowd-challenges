var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// BEE 1098 | SEQUENCIA IJ 4

let i = 0,
	j = 1;

while (i < 2) {
	for (let a = 0; a < 3; a++) {
		if (i > 1.8 && i < 2) {
			i = 2;
		}
		console.log(
			`I=${Number.isInteger(i) ? i : i.toFixed(1)} J=${
				Number.isInteger(j) ? j : j.toFixed(1)
			}`
		);
		j++;
	}

	j = 1;
	j += i + 0.2;
	i += 0.2;
}
