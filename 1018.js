var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// 1018 | CÉDULAS

let value = parseInt(input);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(value);

for (let nota of notas) {
	let qtdNotas = parseInt(value / nota);
	console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
	value = value % nota;
}
