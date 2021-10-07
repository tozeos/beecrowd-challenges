var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// 1038 - LANCHE

var value = input.split(" ");

const prices = [4.0, 4.5, 5.0, 2.0, 1.5];

var cod = parseInt(value.shift() - 1);
var qtde = parseInt(value.shift());
var total = prices[cod];

console.log("Total: R$ " + (total * qtde).toFixed(2));
