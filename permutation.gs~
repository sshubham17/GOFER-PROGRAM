get.[]=[]
get.(x::xs)=[x]::get.xs

notin.x.[]=True
notin.x.(y::ys)
    |x==y=False
    |otherwise=notin.x.ys

gg.x.[]=[]
gg.x.(y::ys)
      |(notin.x.y)=(x::y)::gg.x.ys
      |otherwise=gg.x.ys
      
ggg.[].ys=[]
ggg.(x::xs).ys=gg.x.ys++ggg.xs.ys

p1.xs.ys.0=ys
p1.xs.ys.n=p1.xs.(ggg.xs.ys).(n-1)

p.xs.0=[]
p.xs.n=p1.xs.(get.xs).(n-1)





