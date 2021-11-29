var input = require("fs").readFileSync("/dev/stdin", "utf8");

// BEE 1015 | DISTÂNCIA ENTRE DOIS PONTOS

var value = input.split("\n");
var linha1 = value.shift().split(" ");
var linha2 = value.shift().split(" ");

var x1 = parseFloat(linha1.shift());
var y1 = parseFloat(linha1.shift());

var x2 = parseFloat(linha2.shift());
var y2 = parseFloat(linha2.shift());

// Fórmula

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(
	4
);

console.log(distancia);
