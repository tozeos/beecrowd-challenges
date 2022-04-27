<?php

# BEE 1157 | DIVISORES I

$N = (int) fgets(STDIN);

for ($i=1; $i <= $N ; $i++) { 
    if($N % $i == 0) {
        echo $i . PHP_EOL;
    }
}