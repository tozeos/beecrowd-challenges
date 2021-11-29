var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\r");

// BEE 1070 | SEIS NÚMEROS CONSECUTIVOS

var result = parseInt(lines);
var contador = 0;

while (contador < 6) {
	if (result % 2 == 1) {
		console.log(result);
		result += 1;
		contador += 1;
	} else {
		result += 1;
	}
}
