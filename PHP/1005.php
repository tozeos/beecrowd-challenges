<?php

# BEE 1005 | MÉDIA 1

$A = fgets(STDIN);
$B = fgets(STDIN);
$med = ($A * 3.5 + $B * 7.5) / 11;
$med = number_format($med, 5, '.', '');

echo "MEDIA = " . $med . PHP_EOL;
