var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 1240 | ENCAIXA OU NÃO I

let N = parseInt(lines.shift());

for (let i = 0; i < N; i++) {
	let [A, B] = lines.shift().trim().split(" ");

	if (A.endsWith(B)) {
		console.log("encaixa");
	} else {
		console.log("nao encaixa");
	}
}
