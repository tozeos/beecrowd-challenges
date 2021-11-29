var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\r");

// BEE 1065 | PARES ENTRE CINCO NÚMEROS

var evenNum = 0;

for (let i = 0; i < lines.length; i++) {
	if (parseFloat(lines[i]) % 2 == 0) {
		evenNum++;
	}
}

console.log(`${evenNum} valores pares`);
