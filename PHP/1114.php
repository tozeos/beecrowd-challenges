<?php

# BEE 1114 | SENHA FIXA

$n = 1;
while ($n != 2002) {
    $n = fgets(STDIN);
    if ($n == 2002) {
        echo "Acesso Permitido" . PHP_EOL;
    } else {
        echo "Senha Invalida" . PHP_EOL;
    }
}