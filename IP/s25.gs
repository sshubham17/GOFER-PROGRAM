rev.[]=[]
rev.(x::xs)=rev.xs++[x]


tvs.[]=[]
tvs.(x::xs)=(x-1)::tvs.xs

gcd1.x.1=1
gcd1.1.y=1
gcd1.x.y=fgcd.x.y.y
check1.xy.p.(0).(0)=p
check1.xy.p.g1.g2=fgcd.x.y.(p-1)
fgcd.x.y.p=check1.x.y.p.(mod.(x).(p)).(mod.(y).(p))
