var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

// 1042 | SORT SIMPLES

const comp = (a, b) => a - b

let V = lines.shift().trim().split(' ').map((x) => parseInt(x))
let v = [...V]

v.sort(comp)

for (let i = 0; i < 3; i++) {
    console.log(v[i])
    
}
console.log()
for (let i = 0; i < 3; i++) {
    console.log(V[i])
    
}
