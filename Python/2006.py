# BEE 2006 | IDENTIFICANDO O CHÁ

T = int(input())
resp = input().split(' ')
respCorreta = 0

for i in range(5):
    if int(resp[i]) == T:
        respCorreta+=1

print(respCorreta)

