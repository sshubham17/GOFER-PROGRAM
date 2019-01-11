list.n.[]=[]
list.n.(x::xs)
   |n/=x=x::list.n.xs
   |otherwise=list.n.xs

list1.[]=[]
list1.(x::xs)=x::list1.(list.x.xs)