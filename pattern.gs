list.(x::xs).0=x
list.(x::xs).n=list.xs.(n-1)