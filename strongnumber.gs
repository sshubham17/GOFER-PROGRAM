
--s.0=0

fac.0=1
fac.n=(n*fac.(n-1))

s.x=(mod.x.10)
d1.x=x/10

strong.0=[]
strong.x=(mod.x.10)::strong.(d1.x)

strong1.[]=[]
strong1.(x::xs)=fac.(x)::strong1.xs

strong2.[]=0
strong2.(x::xs)=x+strong2.xs




