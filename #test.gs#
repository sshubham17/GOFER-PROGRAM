rev.[]=[]
rev.(x::xs)=rev.xs++[x]
-----------------------------------------
--sum of diagonal element-- 
list.[].z=[]
list.(x::xs).z=[z++x]++list.xs.(z++[0])

list2.[].z=[]
list2.(x::xs).z=rev.(sum2.(transpose.(rev.(list.(x::xs).z))))
--------------------------------------------
listt.[].z=[]
listt.(x::xs).z=rev.(list.(x::xs).z)


sum2.[]=[]
sum2.(x::xs)=sum1.x::sum2.xs

sum1.[]=0
sum1.(x::xs)=x+sum1.xs
