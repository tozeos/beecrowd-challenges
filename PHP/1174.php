<?php

# BEE 1174 | SELEÇÃO EM VETOR I

for ($I=0; $I < 100; $I++) { 
    $A = floatval(fgets(STDIN));
    if($A <= 10) {
        $res = number_format($A, 1, '.', '');
        echo "A[" . $I . "] = " . $res . PHP_EOL;
    }
}