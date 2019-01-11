rev.[]=[]
rev.(x::xs)=rev.xs++[x]

sum1.[]=0
sum1.(x::xs)=x+sum1.xs

sum2.[]=[]
sum2.(x::xs)=sum1.x::sum2.xs
--------------------------------------
--solve polynomial--
map1.[].l2.z=[]
map1.l1.[].z=[]
map1.(x::xs).ys.z=[z++map.(*x).ys]++map1.xs.ys.(z++[0])

poly.(x::xs).ys.z=sum2.(transpose.(rev.(map1.(x::xs).ys.z)))
--------------------------------------------------

