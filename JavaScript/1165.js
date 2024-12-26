var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 1165 | NÚMERO PRIMO
// DEIXAR PRA DEPOIS

var N = parseInt(lines.shift());

for (let i = 0; i < N; i++) {
	let count = 0;
	let number = lines
		.shift()
		.split(" ")
		.map((x) => parseInt(x));

	for (let n = 1; n <= number[0]; n++) {
		if (number[0] % n == 0) {
			count++;
		}
	}

	if (count == 2) {
		console.log(`${number[0]} eh primo`);
	} else {
		console.log(`${number[0]} nao eh primo`);
	}
}
