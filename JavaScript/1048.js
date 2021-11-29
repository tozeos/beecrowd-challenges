var input = require("fs").readFileSync("stdin", "utf8");

// BEE 1048 | AUMENTO DE SALÁRIO

let salary = parseFloat(input);
let percentage = 0;
let adjustment = 0;
let newSalary = 0;

if (salary <= 400) {
	percentage = 1.15;
	newSalary = salary * percentage;
	adjustment = (newSalary - salary).toFixed(2);

	console.log(`Novo salario: ${newSalary.toFixed(2)}`);
	console.log(`Reajuste ganho: ${adjustment}`);
	console.log(`Em percentual: ${((percentage - 1) * 100).toFixed(0)} %`);
} else if (salary <= 800) {
	percentage = 1.12;
	newSalary = salary * percentage;
	adjustment = (newSalary - salary).toFixed(2);

	console.log(`Novo salario: ${newSalary.toFixed(2)}`);
	console.log(`Reajuste ganho: ${adjustment}`);
	console.log(`Em percentual: ${((percentage - 1) * 100).toFixed(0)} %`);
} else if (salary <= 1200) {
	percentage = 1.1;
	newSalary = salary * percentage;
	adjustment = (newSalary - salary).toFixed(2);

	console.log(`Novo salario: ${newSalary.toFixed(2)}`);
	console.log(`Reajuste ganho: ${adjustment}`);
	console.log(`Em percentual: ${((percentage - 1) * 100).toFixed(0)} %`);
} else if (salary <= 2000) {
	percentage = 1.07;
	newSalary = salary * percentage;
	adjustment = (newSalary - salary).toFixed(2);

	console.log(`Novo salario: ${newSalary.toFixed(2)}`);
	console.log(`Reajuste ganho: ${adjustment}`);
	console.log(`Em percentual: ${((percentage - 1) * 100).toFixed(0)} %`);
} else {
	percentage = 1.04;
	newSalary = salary * percentage;
	adjustment = (newSalary - salary).toFixed(2);

	console.log(`Novo salario: ${newSalary.toFixed(2)}`);
	console.log(`Reajuste ganho: ${adjustment}`);
	console.log(`Em percentual: ${((percentage - 1) * 100).toFixed(0)} %`);
}
