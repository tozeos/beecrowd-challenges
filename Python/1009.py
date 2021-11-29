# BEE 1009 | SALÁRIO COM BÔNUS

nome = input()
salarioFixo = float(input())
vendasEfetuadas = float(input())

total = salarioFixo + vendasEfetuadas * 0.15
print("TOTAL = R$ %0.2f" % total)
