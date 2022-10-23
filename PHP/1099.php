<?php

# BEE 1099 | Soma de Ímpares Consecutivos II

$N = (int) fgets(STDIN);
$sum = 0;

for ($i=0; $i < $N ; $i++) { 
    $num = fscanf(STDIN, "%f %f");
    rsort($num);

    for ($j=$num[1]+1; $j < $num[0]; $j++) {
        if ($j % 2 !== 0) {
            $sum += $j;
        }
    }
    echo $sum . PHP_EOL;
    $sum = 0;
}