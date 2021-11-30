# BEE 1018 | CÉDULAS

v = int(input())
print(v)

print(f"{v//100} nota(s) de R$ 100,00")
v %= 100
print(f"{v//50} nota(s) de R$ 50,00")
v %= 50
print(f"{v//20} nota(s) de R$ 20,00")
v %= 20
print(f"{v//10} nota(s) de R$ 10,00")
v %= 10
print(f"{v//5} nota(s) de R$ 5,00")
v %= 5
print(f"{v//2} nota(s) de R$ 2,00")
v %= 2
print(f"{v} nota(s) de R$ 1,00")