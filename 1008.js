var input = require("fs").readFileSync("/dev/stdin", "utf8");

// URI 1008 | SALÁRIO

var valores = input.split("\n");
var numero = parseInt(valores.shift());
var qtdeHoras = parseInt(valores.shift());
var valorHoras = parseFloat(valores.shift());

var salario = qtdeHoras * valorHoras;

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
