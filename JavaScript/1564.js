var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 1564 | VAI TER COPA?

while (lines.length) {
	let n = lines
		.shift()
		.trim()
		.split(" ")
		.map((x) => parseInt(x));

	if (n > 0) {
		console.log("vai ter duas!");
	} else {
		console.log("vai ter copa!");
	}
}
