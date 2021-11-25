var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// URI 1021 | NOTAS E MOEDAS

let value = parseFloat(input);

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
for (let nota of notas) {
	let qtdNotas = parseInt(value / nota);
	console.log(`${qtdNotas} nota(s) de R$ ${nota.toFixed(2)}`);
	value = value % nota;
}

console.log("MOEDAS:");
for (let moeda of moedas) {
	let qtdMoedas = parseInt(value / moeda);
	console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
	value = (value % moeda) + 0.00001;
}
