<?php 

// BEE 1178 | PREENCHIMENTO DE VETOR III

$X = (int) fgets(STDIN);
$v = 0;

for ($i=0; $i <= 100; $i++) {
    $number = $english_format_number = number_format($X, 4, '.', '');
    $X /= 2;
    echo "N[" . $v++ . "] = " . $number . PHP_EOL;
}