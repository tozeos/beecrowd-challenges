var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// URI 1019 | CONVERSÃO DE TEMPO

let time = parseInt(input);
let h = parseInt(time / 3600);
time = time % 3600;
let m = parseInt(time / 60);
let s = time % 60;
console.log(`${h}:${m}:${s}`);
