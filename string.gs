s.[]=[]
s.(x::xs)=x::s.xs

s1.x=(ord.x)-48

s2.[]=[]
s2.(x::xs)=s1.x::s2.xs

f2.[].l2.z=[]
f2.l1.[].z=[]
f2.(x::xs).ys.z=[z++map.(*x).ys]++f2.xs.ys.(z++[0])

su.[]=0
su.(x::xs)=x+su.xs

su1.[]=[]
su1.(x::xs)=su.x::su1.xs

rev.[]=[]
rev.(x::xs)=rev.xs++[x]

f3.(xs).ys.z=show.(oo.(rev.(add.(rev.([0]++(su1.(transpose.(rev.(f2.(s2.xs).(s2.ys).z)))))))))

add.[]=[]
add.[x]=[x]
add.(x::y::xs)=[(mod.x.10)]++add.(((div.x.10)+y)::xs)

pow.x.0=1
pow.x.y=x*pow.x.(y-1)

o.x=chr.(48+x)

oo.[]=[]
oo.(x::xs)=o.x::oo.xs

g.x.y = x+y
