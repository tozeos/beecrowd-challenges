# BEE 1015 | DISTÂNCIA ENTRE DOIS PONTOS
import math

line = input().split(' ')
x1 = float(line[0])
y1 = float(line[1])

line = input().split(' ')
x2 = float(line[0])
y2 = float(line[1])

distance = math.sqrt(pow((x2 - x1), 2) + pow((y2 - y1), 2))
print("%0.4f" % distance)