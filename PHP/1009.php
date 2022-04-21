<?php

# BEE 1007 | SALARIO COM BONUS

$name = fgets(STDIN);
$fix_salary = fgets(STDIN);
$sell_amount = fgets(STDIN);
$percentage = $sell_amount * 0.15;
$total_salary = $fix_salary + $percentage;


echo "TOTAL = R$ " . number_format($total_salary, 2, ".", "") . PHP_EOL;