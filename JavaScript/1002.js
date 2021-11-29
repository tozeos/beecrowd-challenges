var input = require("fs").readFileSync("/dev/stdin", "utf8");

// URI 1002 | ÁREA DO CÍRCULO

var raio = parseFloat(input);
var PI = 3.14159;

var area = PI * (raio * raio);
console.log(`A=${area.toFixed(4)}`);
