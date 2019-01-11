list.x.[]=[]
list.x.(y::xs)
    |x==y=list.x.xs
    |otherwise=y::list.x.xs

list1.[]=[]
list1.(x::xs)=x::list1.(list.x.xs)