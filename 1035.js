var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

//1035 - TESTE DE SELEÇÃO 1

var value = input.split(" ");

var A = parseInt(value.shift());
var B = parseInt(value.shift());
var C = parseInt(value.shift());
var D = parseInt(value.shift());

if (B > C && D > A && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0) {
	console.log("Valores aceitos");
} else {
	console.log("Valores nao aceitos");
}
