var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// BEE 1046 | TEMPO DE JOGO

let [inicio, fim] = lines
	.shift()
	.split(" ")
	.map((x) => parseInt(x));

if (fim <= inicio) fim += 24;

console.log(`O JOGO DUROU ${fim - inicio} HORA(S)`);
