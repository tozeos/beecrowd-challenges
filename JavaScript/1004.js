var input = require("fs").readFileSync("/dev/stdin", "utf8");

// BEE 1004 | PRODUTO SIMPLES

var valores = input.split("\n");
var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
var PROD = A * B;

console.log(`PROD = ${PROD}`);
