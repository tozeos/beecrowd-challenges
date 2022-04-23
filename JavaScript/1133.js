var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// BEE 1133 | RESTO DA DIVISAO

let X = parseInt(lines.shift().trim());
let Y = parseInt(lines.shift().trim());

if (X > Y) {
	for (let i = Y + 1; i < X; i++) {
		if (i % 5 == 2 || i % 5 == 3) {
			console.log(`${i}`);
		}
	}
} else if (X < Y) {
	for (let i = X + 1; i < Y; i++) {
		if (i % 5 == 2 || i % 5 == 3) {
			console.log(`${i}`);
		}
	}
}
