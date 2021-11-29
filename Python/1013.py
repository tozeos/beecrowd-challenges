# BEE 1013 | O MAIOR

line = input().split(' ')
A = int(line[0])
B = int(line[1])
C = int(line[2])

maiorAB = (A + B + abs(A - B)) / 2

if maiorAB > C:
    print("%d eh o maior" % maiorAB)
else:
    print("%d eh o maior" % C)