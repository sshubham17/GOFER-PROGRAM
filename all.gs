su1.[]=0
su1.(x::xs)=x+su1.xs

m1.[]=1
m1.(x::xs)=x*m1.xs

m.l1.[]=[]
m.[].l2=[]
m.(x::xs).(y::ys)=x*y::m.xs.ys

su.[].l2=l2
su.l1.[]=l1
su.(x::xs).(y::ys)=x+y::su.xs.ys

fact.0=1
fact.n=n*fact.(n-1)

fib.0=0
fib.1=1
fib.x=fib.(x-1)+fib.(x-2)

len.[]=0
len.(x::xs)=1+len.xs

rever.[]=[]
rever.(x::xs)=rever.xs++[x]

sq.x=x*x

e.0=True
e.1=False
e.x=e.(x-2)

e1.[]=[]
e1.(x::xs)
     |e.x=(sq.x::e1.xs)
     |otherwise=e1.xs

o.1=True
o.0=False
o.x=o.(x-2)

o1.[]=[]
o1.(x::xs)
 |o.x=(sq.x::o1.xs)
 |otherwise=o1.xs

e2.0=True
e2.1=False
e2.x=(mod.x.2)==0

strong.0=[]
strong.x=(mod.x.10)::strong.(x/10)

pred.x=x-1
sub.(x,0)=x
sub.(x,y)=sub.(pred.x,pred.y)

--rev1.0=0
--rev1.n=rev2.0.n

--rev2.s.0=s
--rev2.s.n=rev2.(s*10+mod.n.10)

--con.[].[]=[]
--con.x.y=x++y
--cons.(x::y)=con.x.y

rev.n=secrev.n.0
secrev.0.m=m
secrev.n.m=secrev.(n/10).((m*10)+(mod.n.10))

at.0=0
at.x=1+at.(div.x.10)

alter.[]=[]
alter.[x]=[x]
alter.(x::y::xs)=x::alter.xs

alter1.[]=[]
alter1.[x]=[]
alter1.(x::y::xs)=y::alter1.xs

f.[].ys=[]
f.(x::xs).ys=map.(x::).ys++f.xs.ys

