<?php

# BEE 1020 | AGE IN DAYS

$daysT = (int) fgets(STDIN);

$years = $daysT / 365;
$daysT %= 365;
$months = $daysT / 30;
$days = $daysT % 30;

echo (int) $years . " ano(s)". "\n";
echo (int) $months . " mes(es)". "\n";
echo (int) $days . " dia(s)". "\n";