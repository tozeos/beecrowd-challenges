var input = require("fs").readFileSync("stdin", "utf8");

// URI 1049 | MONTH

let d = new Date(input);
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = monthNames[d.getMonth()]
console.log(month)
