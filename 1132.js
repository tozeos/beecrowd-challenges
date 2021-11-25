var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// URI 1132 | MÚLTIPLOS DE 13

var X = parseInt(lines.shift());
var Y = parseInt(lines.shift());
var sum = 0;

// If true, start the 'for' loop when X is higher than Y.
for (let i = Y; i < X; i++) {
	// Verify if the current i value isn't divisible by 13 and sum.
	if (i % 13 !== 0) {
		sum += i;
	}
}
// If false, start the 'for' loop when Y is higher than X.
for (let i = X; i < Y; i++) {
	// Verify if the current i value isn't divisible by 13 and sum.
	if (i % 13 !== 0) {
		sum += i;
	}
}

// Print
console.log(sum);
