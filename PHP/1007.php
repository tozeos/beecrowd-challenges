<?php

# BEE 1007 | DIFERENÇA

$A = fgets(STDIN);
$B = fgets(STDIN);
$C = fgets(STDIN);
$D = fgets(STDIN);
$diff = $A * $B - $C * $D;

echo "DIFERENCA = " . $diff . PHP_EOL;