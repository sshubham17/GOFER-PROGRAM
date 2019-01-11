f.(x::xs)=last1.(x::xs)
last1.[]=0
last1.(x::xs)=1+last1.xs