var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(' ');

// URI 1044 | TIPOS DE TRIÂNGULOS

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var ladoA = 0;
var ladoB = 0;
var ladoC = 0;


// Order the sides: The A must be the biggest value
if (A <= B && A <= C) {
	ladoC = A;
	if(B <= C) {
		ladoB = B;
		ladoA = C;
	} else{
		ladoB = C;
		ladoA = B;
	}
} else if (B <= A && B <= C) {
	ladoC = B;
	if(A <= C) {
		ladoB = A;
		ladoA = C;
	} else {
		ladoB = C;
		ladoA = A;
	}
} else if (C < A) {
	ladoC = C;
	if (A < B) {
		ladoB = A;
		ladoA = B;
	} else {
		ladoB = B;
		ladoA = A;
	}
}

// Classifying the triangles
if (ladoA >= ladoB + ladoC) {
	console.log('NAO FORMA TRIANGULO');
} else {
	if (Math.pow(ladoA, 2) == Math.pow(ladoB, 2) + Math.pow(ladoC, 2)) {
		console.log('TRIANGULO RETANGULO');
	}

	if (Math.pow(ladoA, 2) > Math.pow(ladoB, 2) + Math.pow(ladoC, 2)) {
		console.log('TRIANGULO OBTUSANGULO');
	}

	if (Math.pow(ladoA, 2) < Math.pow(ladoB, 2) + Math.pow(ladoC, 2)) {
		console.log('TRIANGULO ACUTANGULO');
	}

	if (ladoA == ladoB && ladoA == ladoC) {
		console.log('TRIANGULO EQUILATERO');
	}

	if (ladoA == ladoB && ladoA != ladoC || ladoA == ladoC && ladoA != ladoB || ladoB == ladoC && ladoB != ladoA) {
		console.log('TRIANGULO ISOSCELES');
	}
}
