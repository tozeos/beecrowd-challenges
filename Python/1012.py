# BEE 1012 | ÁREA

line = input().split(' ')
A = float(line[0])
B = float(line[1])
C = float(line[2])
pi = 3.14159

triangle = (A * C) / 2
circle = pi * pow(C, 2)
trapezoid = ((A + B) / 2) * C
square = pow(B, 2)
rectangle = A * B

print("TRIANGULO: %0.3f" % triangle)
print("CIRCULO: %0.3f" % circle)
print("TRAPEZIO: %0.3f" % trapezoid)
print("QUADRADO: %0.3f" % square)
print("RETANGULO: %0.3f" % rectangle)
