# BEE 1116 | DIVIDINDO X POR Y

N = int(input())

for i in range(N):
    line = input().split(' ')
    X = int(line[0])
    Y = int(line[1])
    if Y == 0:
        print("divisao impossivel")
    else:
        print(X / Y)