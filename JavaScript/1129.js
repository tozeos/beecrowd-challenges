var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 1129 | LEITURA ÓTICA
// DEIXAR PRA DEPOIS

while (lines.length) {
	let N = parseInt(lines.shift());
	if (!N) break;

	for (let i = 0; i < N; i++) {
		const answer = ["A", "B", "C", "D", "E"];
		let question = lines
			.shift()
			.trim()
			.split(" ")
			.map((x) => parseInt(x));

		for (let j = 0; j < answer.length; j++) {
			if (question[j] == 0 || question[j] <= 127) {
				console.log(answer[j]);
			} else console.log("*");
		}
	}
}
/* 
	if (A == 0 || A <= 127) {
		console.log("A");
	} else if (B == 0 || B <= 127) {
		console.log("B");
	} else if (C == 0 || C <= 127) {
		console.log("C");
	} else if (D == 0 || D <= 127) {
		console.log("D");
	} else if (E == 0 || E <= 127) {
		console.log("E");
	} else {
		console.log("*");
	} 
}
*/
//1079
