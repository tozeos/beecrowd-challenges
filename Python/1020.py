# BEE 1020 | IDADE EM DIAS

V = int(input())
anos = V // 365
V %= 365
meses = V // 30
V %= 30

print("%d ano(s)" % anos)
print("%d mes(es)" % meses)
print("%d dia(s)" % V)
