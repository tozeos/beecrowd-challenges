var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// 1036 - FÓRMULA DE BHASKARA

var value = input.split(" ");

var A = parseFloat(value.shift());
var B = parseFloat(value.shift());
var C = parseFloat(value.shift());

delta = Math.pow(B, 2) - 4 * A * C;
R1 = (-B + Math.sqrt(delta)) / (2 * A);
R2 = (-B - Math.sqrt(delta)) / (2 * A);

if (A == 0 || delta < 0) {
	console.log("Impossivel calcular");
} else {
	console.log(`R1 = ${R1.toFixed(5)}`);
	console.log(`R2 = ${R2.toFixed(5)}`);
}
