list.[].n=[]
list.xs.0=[]
list.(x::xs).n=x::list.xs.(n-1)

remov.[].n=[]
remov.xs.0=[]
remov.(x::xs).n=remov.xs.(n-1)

--otake.[].n=[]
--take.xs.0=[]
--take.(x::xs).n=(list.xs.n)::take.list.remov.xs.(n-1)

list1.[].n=[]
list1.xs.0=[]
list1.(x::xs).n
   |
