var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 2160 | NOME NO FORMULÁRIO

let str = lines.shift();

if (str.length <= 80) {
	console.log("YES");
} else {
	console.log("NO");
}
