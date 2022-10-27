<?php

# BEE 1116 | DIVIDINDO X POR Y

$N = (int) fgets(STDIN);

while($N--) {
    $nums = explode(" ", fgets(STDIN));
    $X = $nums[0];
    $Y = $nums[1];

    if ($Y == 0) echo "divisao impossivel" . PHP_EOL;
    else echo number_format($X/$Y, 1, '.', '') . PHP_EOL;

}