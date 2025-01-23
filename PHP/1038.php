<?php

# BEE 1038 | SNACK

$productsList = [4.00, 4.50, 5.00, 2.00, 1.50];
$data = fscanf(STDIN, "%f %f");
$cod = (int) $data[0] - 1;
$quantity = (int) $data[1];
$total = $productsList[$cod];

echo "Total: R$ " . number_format($total * $quantity, 2, '.', '') . PHP_EOL;

