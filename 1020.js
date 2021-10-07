var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// 1020 - IDADE EM DIAS

let totalDays = parseInt(input);
let years = parseInt(totalDays / 365);
totalDays %= 365;
let months = parseInt(totalDays / 30);
let days = totalDays % 30;

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);
