# BEE 1010 | CÁLCULO SIMPLES

values = input().split(' ')
code1 = int(values[0])
quantity1 = int(values[1])
value1 = float(values[2])

values = input().split(' ')
code2 = int(values[0])
quantity2 = int(values[1])
value2 = float(values[2])

pagamento = quantity1 * value1 + quantity2 * value2
print("VALOR A PAGAR: R$ %0.2f" % pagamento)