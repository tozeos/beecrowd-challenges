var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

// BEE 2006 | IDENTIFICANDO O CHÁ

var T = parseInt(lines.shift());
var respCorreta = 0;
var N = 5;
var competidorAtual = lines
	.shift()
	.trim()
	.split(" ")
	.map((x) => parseInt(x));

while (N--) {
	if (competidorAtual[N] == T) {
		respCorreta++;
	}
}

console.log(respCorreta);
