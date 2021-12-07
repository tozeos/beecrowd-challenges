# BEE 1036 | FÓRMULA DE BHASKARA

import math

line = input().split(' ')
A = float(line[0])
B = float(line[1])
C = float(line[2])

delta = pow(B, 2) - 4 * A * C

if A != 0 and delta > -1:
    R1 = (-B + math.sqrt(delta)) / (2 * A)
    R2 = (-B - math.sqrt(delta)) / (2 * A)
    print("R1 = %0.5f" % R1)
    print("R2 = %0.5f" % R2)
else:
    print("Impossivel calcular")


