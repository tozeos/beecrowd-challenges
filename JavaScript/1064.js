var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\r");

// URI 1064 | POSITIVOS E MÉDIA

var sum = 0;
var positiveNum = 0;

for (let i = 0; i < lines.length; i++) {
	if (parseFloat(lines[i]) > 0) {
		positiveNum++;
		sum += parseFloat(lines[i]);
	}
}

let media = sum / positiveNum;
console.log(`${positiveNum} valores positivos`);
console.log(`${media.toFixed(1)}`);
