var input = require("fs").readFileSync("stdin", "utf8");

// BEE 1143 | QUADRADO E AO CUBO

let n = parseInt(input);
for (let i = 1; i <= n; i++) {
	console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
}