<?php

# BEE 1067 | NÚMEROS ÍMPARES

$n = fgets(STDIN);
$i = 1;

while ($i <= $n) {
    if ($i % 2 !== 0)
        echo $i . PHP_EOL;
    $i++;
}
