var input = require("fs").readFileSync("/dev/stdin", "utf8");

// BEE 1006 | MÉDIA 2

var valores = input.split("\n");
var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());
var MED = (A * 2 + B * 3 + C * 5) / 10;

console.log(`MEDIA = ${MED.toFixed(1)}`);
