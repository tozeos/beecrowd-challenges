var input = require("fs").readFileSync("/dev/stdin", "utf8");

// BEE 1003 | SOMA SIMPLES

var num = input.split("\n");
var A = parseInt(num.shift());
var B = parseInt(num.shift());
var SOMA = A + B;

console.log(`SOMA = ${SOMA}`);
