var input = require("fs").readFileSync("stdin", "utf8");

// BEE 1051 | IMPOSTO DE RENDA

let renda = parseFloat(input);
let imposto = 0;
let diff = 0;

if (renda > 4500) {
	imposto = 1000 * 0.08 + 1500 * 0.18;
	diff = renda - 4500;
	imposto += diff * 0.28;
	console.log(`R$ ${imposto.toFixed(2)}`);
} else if (renda > 3000) {
	imposto = 1000 * 0.08;
	diff = renda - 3000;
	imposto += diff * 0.18;
	console.log(`R$ ${imposto.toFixed(2)}`);
} else if (renda > 2000) {
	diff = renda - 2000;
	imposto += diff * 0.08;
	console.log(`R$ ${imposto.toFixed(2)}`);
} else {
	console.log("Isento");
}
