var input = require("fs").readFileSync("/dev/stdin", "utf8");

// BEE 1014 | CONSUMO

var value = input.split("\n");
var X = parseInt(value.shift());
var Y = parseFloat(value.shift());

var consumoMedio = (X / Y).toFixed(3);

console.log(consumoMedio + " km/l");
