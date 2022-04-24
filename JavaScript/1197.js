var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 1197 | VOLTA À FACULDADE DE FÍSICA

while (lines.length) {
	let [v, t] = lines
		.shift()
		.trim()
		.split(" ")
		.map((x) => parseInt(x));

	console.log(v * 2 * t === -0 ? 0 : v * 2 * t);
}
