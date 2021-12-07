# BEE 1041 | COORDENADAS DE UM PONTO

coords = input().split(' ')
X = float(coords[0])
Y = float(coords[1])

if Y == 0 and X == 0:
    print("Origem")
elif Y == 0:
    print("Eixo X")
elif X == 0:
    print("Eixo Y")
elif X > 0 and Y > 0:
    print("Q1")
elif X > 0 > Y:
    print("Q4")
elif X < 0 and Y > 0:
    print("Q2")
else:
    print("Q3")
