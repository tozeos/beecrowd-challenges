<?php

# BEE 1078 | TABUADA
$input = (int) fgets(STDIN);

for ($i=1; $i <= 10; $i++) { 
    echo $i . " x " . $input . " = " . ($i*$input) . PHP_EOL;
}