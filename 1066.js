var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\r");

// URI 1067 | PARES, ÍMPARES, POSITIVOS E NEGATIVOS

var even = 0;
var odd = 0;
var positive = 0;
var negative = 0;

for (let i = 0; i < lines.length; i++) {
	if (parseFloat(lines[i]) % 2 === 0) {
		even++;
	}
	if (parseFloat(lines[i]) % 2 === 1 || parseFloat(lines[i]) % 2 === -1) {
		odd++;
	}
	if (parseFloat(lines[i]) > 0) {
		positive++;
	}
	if (parseFloat(lines[i]) < 0) {
		negative++;
	}
}

console.log(`${even} valor(es) par(es)`);
console.log(`${odd} valor(es) impar(es)`);
console.log(`${positive} valor(es) positivo(s)`);
console.log(`${negative} valor(es) negativo(s)`);
