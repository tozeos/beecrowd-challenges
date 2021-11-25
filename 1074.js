var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// URI 1074 | PAR OU ÍMPAR

var N = parseInt(input.split("\n"));
lines.shift();
var evenOdd = "";
var positiveNegative = "";

for (let i = 0; i < N; i++) {
	if (lines[i] % 2 !== 0) {
		// Check if the number is even or odd
		evenOdd = "ODD ";
	} else if (lines[i] == 0) {
		evenOdd = "";
	} else {
		evenOdd = "EVEN ";
	}
	if (lines[i] > 0) {
		// Check if the number is positive or negative
		positiveNegative = "POSITIVE";
	} else if (lines[i] < 0) {
		positiveNegative = "NEGATIVE";
	} else {
		positiveNegative = "NULL";
	}

	console.log(evenOdd + positiveNegative);
}
