<?php

# BEE 1146 | SEQUENCIAS CRESCENTES

$X = 1;

while($X != 0) {
    $X = (int) fgets(STDIN);
    for ($i=1; $i <= $X; $i++) { 
        if($i == $X) {
            echo $i . PHP_EOL;
        } else {
            echo $i . " ";
        }
    }
}
