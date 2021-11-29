var input = require("fs").readFileSync("stdin", "utf8");

// BEE 1078 | TABELA DE MULTIPLICAÇÃO

var n = input;
n = parseInt(n);

for (let i = 1; i <= 10; i++) {
	console.log(`${i} x ${n} = ${i * n}`);
}
