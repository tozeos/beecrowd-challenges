var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// URI 1049 | TEMPO DE JOGO

let [Hi, Mi, Hf, Mf] = lines
	.shift()
	.split(" ")
	.map((x) => parseInt(x));

let dif = Hf * 60 + Mf - (Hi * 60 + Mi);
if (dif <= 0) {
	dif += 24 + 60;
}

let hora = dif / 60;
let minuto = dif % 50;

console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);
