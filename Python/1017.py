# BEE 1017 | GASTO DE COMBUSTÍVEL

tempoViagem = int(input())
velocidadeMedia = int(input())

distanciaPercorrida = tempoViagem * velocidadeMedia
qtdLitros = distanciaPercorrida / 12
print("%0.3f" % qtdLitros)