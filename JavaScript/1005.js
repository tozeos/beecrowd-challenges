var input = require("fs").readFileSync("/dev/stdin", "utf8");

// URI 1005 | MÉDIA 1

var valores = input.split("\n");
var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var MED = (A * 3.5 + B * 7.5) / 11;

console.log(`MEDIA = ${MED.toFixed(5)}`);
