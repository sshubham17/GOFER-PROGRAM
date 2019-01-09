rev.[]=[]
rev.(x::xs)=rev.xs++[x]

list.[].z=[]
list.(x::xs).z=[z++x]++list.xs.(z++[0])

f3.(x::xs).z=add1.(transpose.(rev.(list.(rev.(x::xs)).z)))

add.[]=0
add.(x::xs)=x+add.xs

add1.[]=[]
add1.(x::xs)=add.x::add1.xs

