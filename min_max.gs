listt.[].n=[]
listt.xs.0=[]
listt.(x::xs).n=take.n.(x::xs)

list.[].n=[]
list.xs.0=[]
list.(x::xs).n=listt.(x::xs).n::list.xs.n

lis.n.[]=[]
lis.n.(x::xs)
  |n>x=x::lis.n.xs
  |otherwise=lis.n.xs