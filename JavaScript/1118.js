var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 1118 | VÁRIAS NOTAS COM VALIDAÇÃO

let x = 0;
let y = 1;
let nota = [0, 0];

while (y != 2) {
	for (let i = 0; i < 2; ) {
		nota[i] = parseFloat(lines[x]);
		if (nota[i] < 0 || nota[i] > 10) {
			console.log(`nota invalida`);
		} else {
			i++;
		}
		x++;
	}

	media = (nota[0] + nota[1]) / 2;

	console.log(`media = ${media.toFixed(2)}`);

	let t = true;
	while (t) {
		console.log("novo calculo (1-sim 2-nao)");
		if (lines[x] == 1) {
			y = 1;
			t = false;
		} else if (lines[x] == 2) {
			y = 2;
			t = false;
		}
		x++;
	}
}
