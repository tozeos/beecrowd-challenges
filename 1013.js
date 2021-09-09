var input = require('fs').readFileSync('/dev/stdin', 'utf8');

// URI 1013 | O MAIOR

var values = input.split(' ')
var a = parseInt(values.shift())
var b = parseInt(values.shift())
var c = parseInt(values.shift())

var maiorAB = (a + b + Math.abs(a - b)) / 2

if (maiorAB > c) {
  console.log(maiorAB + " eh o maior")
} else {
  console.log(c + " eh o maior")
}