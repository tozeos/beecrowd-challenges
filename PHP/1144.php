<?php

# BEE 1144 | SEQUENCIA LOGICA

$N = (int) fgets(STDIN);

for ($i=1; $i <= $N; $i++) { 
    $a = $i*$i;
    $b = $i*$i*$i;
    echo $i . " " . $a . " " . $b . PHP_EOL;
    $c = $a+1;
    $d = $b+1;
    echo $i . " " . $c . " " . $d . PHP_EOL;
}