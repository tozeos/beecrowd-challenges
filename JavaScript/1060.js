var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// BEE 1060 | NÚMEROS POSITIVOS

let p = 0;

for (let i = 0; i < 6; i++) {
	let n = parseFloat(lines.shift().trim());
	if (n > 0) ++p;
}

console.log(`${p} valores positivos`);
