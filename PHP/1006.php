<?php

# BEE 1006 | MÉDIA 2

$A = fgets(STDIN);
$B = fgets(STDIN);
$C = fgets(STDIN);

$med = ($A * 2 + $B * 3 + $C * 5) / 10;
$med = number_format($med, 1, '.', '');

echo "MEDIA = " . $med . PHP_EOL;