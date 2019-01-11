s.[]=0
s.(x::xs)=x+s.(xs)

rev.[]=[]
rev.(x::xs)=rev.(xs)++[x]

sq.[]=[]
sq.(x::xs)=x*x::sq.(xs)