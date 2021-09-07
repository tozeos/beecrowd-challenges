var input = require("fs").readFileSync("stdin", "utf8");

// URI 1044 | TIPOS DE TRIÂNGULOS not finished

var splitted = input.split(" ").sort().reverse();

var A = parseFloat(splitted.shift());
var B = parseFloat(splitted.shift());
var C = parseFloat(splitted.shift());

if (A >= B + C) {
	console.log("NAO FORMA TRIANGULO");
} else if (A * A == B * B + C * C) {
	console.log("TRIANGULO RETANGULO");
} else if (A * A > B * B + C * C) {
	console.log("TRIANGULO OBTUSANGULO");
} else if (A * A < B * B + C * C) {
	console.log("TRIANGULO RETANGULO");
}

if ((A == B) == C) {
	console.log("TRIANGULO EQUILATERO");
} else if (A == B || C == A || A == B) {
	console.log("TRIANGULO ISOSCELES");
}
