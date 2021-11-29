var input = require("fs").readFileSync("/dev/stdin", "utf8");
const coord = input.split(" ");

// URI 1041 | COORDENADAS DE UM PONTO

let X = parseFloat(coord.shift());
let Y = parseFloat(coord.shift());

if (Y === 0 && X === 0) {
	console.log("Origem");
} else if (Y === 0) {
	console.log("Eixo X");
} else if (X === 0) {
	console.log("Eixo Y");
} else if (X > 0 && Y > 0) {
	console.log("Q1");
} else if (X > 0 && Y < 0) {
	console.log("Q4");
} else if (X < 0 && Y > 0) {
	console.log("Q2");
} else {
	console.log("Q3");
}
