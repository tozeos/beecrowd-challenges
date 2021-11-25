var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// URI 1050 | DDD

const ddd = [61, 71, 11, 21, 32, 19, 27, 31];
const destination = [
	"Brasilia",
	"Salvador",
	"Sao Paulo",
	"Rio de Janeiro",
	"Juiz de Fora",
	"Campinas",
	"Vitoria",
	"Belo Horizonte",
];

let value = parseInt(input);

if (ddd.indexOf(value) == -1) {
	console.log("DDD nao cadastrado");
} else {
	let findDestination = destination[ddd.indexOf(value)];
	console.log(findDestination);
}
