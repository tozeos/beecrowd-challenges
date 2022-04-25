var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 1117 | VALIDAÇÃO DE NOTA

let notasValidas = 0;
let media = 0;

while (notasValidas < 2) {
	let nota = parseFloat(lines.shift());
	if (nota < 0 || nota > 10) {
		console.log("nota invalida");
	} else {
		media += nota;
		notasValidas++;
		if (notasValidas == 2) {
			media /= 2;
			console.log(`media = ${media.toFixed(2)}`);
		}
	}
}
