var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

// BEE 2374 | PNEU

let N = parseInt(lines.shift());
let M = parseInt(lines.shift());

console.log(N - M);
