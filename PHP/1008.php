<?php

# BEE 1007 | SALARIO

$num = fgets(STDIN);
$work_hours = fgets(STDIN);
$salary = fgets(STDIN);

echo "NUMBER = " . $num;
echo "SALARY = U$ " . number_format($salary * $work_hours, 2, ".", "") . PHP_EOL;
