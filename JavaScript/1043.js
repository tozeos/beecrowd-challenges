var input = require("fs").readFileSync("stdin", "utf8");

// BEE 1043 | TRIÂNGULO

var splitted = input.split(" ");

var A = parseFloat(splitted.shift());
var B = parseFloat(splitted.shift());
var C = parseFloat(splitted.shift());

// calcula perímetro do triangulo

var trianglePerimeter = A + B + C;
var trapezoidArea = ((A + B) * C) / 2;

if (A < B + C && B < A + C && C < A + B) {
	console.log(`Perimetro = ${trianglePerimeter.toFixed(1)}`);
} else {
	console.log(`Area = ${trapezoidArea.toFixed(1)}`);
}
