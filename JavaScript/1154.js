var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 1113 | IDADES 95°

let stop = 0;
let cont = 0;
let media = 0;

while (stop != 1) {
	let idade = parseInt(lines.shift().trim());
	if (idade > 0) {
		cont++;
		media += idade;
	} else {
		console.log((media / cont).toFixed(2));
		stop++;
	}
}
