var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

// 1072 | INTERVALO 2

// Leia um valor inteiro N.

var N = parseInt(input.split('\n'))
lines.shift();
var In = 0;
var Out = 0;

// Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
for (let i = 0; i < N; i++) {
    if(lines[i] >= 10 && lines[i] <= 20) {
        In++;
    } else {
        Out++;
    }
}

// Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo,
// mostrando essas informações.
console.log(`${In} in`);
console.log(`${Out} out`);