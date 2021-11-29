var input = require("fs").readFileSync("/dev/stdin", "utf8");

// BEE 1009 | SALÁRIO COM BÔNUS

var valores = input.split("\n");
var nome = valores.shift(); // CHECAR
var salarioFixo = parseFloat(valores.shift());
var totalVendas = parseFloat(valores.shift());

var salarioTotal = salarioFixo + totalVendas * 0.15;

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`);
