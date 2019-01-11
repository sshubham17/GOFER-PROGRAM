get.[]=[]
get.(x::xs)=[x]::get.xs

f.[].ys=[]
f.(x::xs).ys=map.(x::).ys++f.xs.ys

ff.xs.ys.0=ys
ff.xs.ys.n=ff.xs.(f.xs.ys).(n-1)

ggg.x.y=ff.[1...x].(get.[1...x]).(y-1)

gg.x=(ggg.[1...x]).(x-1)

fff.[].x=[]
fff.(y::ys).x
    |(sum.y)==x=y::fff.ys.x
    |otherwise=fff.ys.x

