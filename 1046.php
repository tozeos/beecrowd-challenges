<?php
$input = explode(" ", fgets(STDIN));
$end = (int) $input[0];
$start = (int) $input[1];

if ($end <= $start)
    $end += 24;

echo "O JOGO DUROU " . ($end - $start) . " HORA(S)" . PHP_EOL;
