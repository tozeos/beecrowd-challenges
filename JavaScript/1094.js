var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// BEE 1094 | EXPERIENCIAS

let testes = parseInt(lines.shift());
let coelhos = 0,
	ratos = 0,
	sapos = 0,
	numeroCobaias = 0,
	identificador = 0,
	total = 0;

for (let i = 0; i < testes; i++) {
	let exp = lines.shift().trim().split(" ");
	numeroCobaias = parseInt(exp.shift());
	identificador = exp.shift();
	total += numeroCobaias;

	if (identificador == "C") {
		coelhos += numeroCobaias;
	}

	if (identificador == "R") {
		ratos += numeroCobaias;
	}

	if (identificador == "S") {
		sapos += numeroCobaias;
	}
}

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${((coelhos * 100) / total).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((ratos * 100) / total).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((sapos * 100) / total).toFixed(2)} %`);
