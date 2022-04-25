var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 1079 | MEDIAS PONDERADAS

let N = parseInt(lines.shift());
let media = 0;

for (let i = 0; i < N; i++) {
	let [A, B, C] = lines
		.shift()
		.trim()
		.split(" ")
		.map((x) => parseFloat(x));

	media = (A * 2 + B * 3 + C * 5) / 10;
	console.log(media.toFixed(1));
}
