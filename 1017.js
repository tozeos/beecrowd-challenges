var input = require("fs").readFileSync("/dev/stdin", "utf8");
var value = input.split("\n");

// URI 1017 | GASTO DE COMBUSTÍVEL

var tempoViagem = parseInt(value.shift());
var velocidadeMedia = parseInt(value.shift());

var distanciaPercorrida = tempoViagem * velocidadeMedia;
var litrosNecessarios = (distanciaPercorrida / 12).toFixed(3);

console.log(litrosNecessarios);
