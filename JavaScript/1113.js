var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 1113 | CRESCENTE E DECRESCENTE

let stop = 0;

while (stop != 1) {
	let [A, B] = lines
		.shift()
		.trim()
		.split(" ")
		.map((x) => parseInt(x));

	if (A > B) {
		console.log("Decrescente");
	} else if (A < B) {
		console.log("Crescente");
	} else {
		stop++;
	}
}
