var input = require("fs").readFileSync("stdin", "utf8");

// BEE 1044 | MÚLTIPLOS

var splitted = input.split(" ");

var A = parseInt(splitted.shift());
var B = parseInt(splitted.shift());

if (A % B == 0 || B % A == 0) {
	console.log("Sao Multiplos");
} else {
	console.log("Nao sao Multiplos");
}
