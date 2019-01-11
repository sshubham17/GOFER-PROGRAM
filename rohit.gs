sq.x=x*x

fact.1=1
fact.n=n*fact.(n-1)

map3.f.g.[]=[]
map3.f.g.(x::y::ys)=f.x::g.y::map3.f.g.ys