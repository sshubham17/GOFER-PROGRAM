div1.x.y
 |mod.x.y==0=y
 |otherwise=0

--f2.n=f1.n.1

f1.0.a=0
f1.n.a
  |a<=(n/2)=(div1.n.a)+f1.n.(a+1)
  |otherwise=f1.0.a

revers.n=secrev.n.0

secrev.0.m=0
secrev.n.m=(m*10)+(mod.n.10)+secrev.(n/10).((m*10)+(mod.n.10))


