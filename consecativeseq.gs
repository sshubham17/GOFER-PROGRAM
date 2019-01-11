list.xs.[]=True
list.[].ys=False
list.(x::xs).(y::ys)
       |x==y=list.xs.ys
       |otherwise=list.xs.(y::ys)
------------------------------------------------------
list1.[].ys.z=[]
list1.(x::xs).ys.z=(z++(map.(x*).ys))::list1.xs.ys.(z++[0])

list2.xs.ys.z=add1.(transpose.(reverse.(list1.xs.ys.z)))

add.[]=0
add.(x::xs)=x+add.xs

add1.[]=[]
add1.(x::xs)=add.x::add1.xs

---------------------------------------------
-------polynomial multiplication using tuple-------
f.(x,y)=x
s.(x,y)=y

a.x.[]=[]
a.x.(y::ys)=(f.x*f.y,s.x+s.y)::a.x.ys

b.[].ys=[]
b.(x::xs).ys=a.x.ys++b.xs.(ys)

d.(x::[])=x
d.(x::y::xs)=d.((f.x+f.y,s.x)::xs)

dd.[]=[]
dd.(x::xs)=d.(x)::dd.xs

chk.x.y |s.x==s.y=True|otherwise=False
chk1.x.y |s.x/=s.y=True|otherwise=False

c.[]=[]
c.(x::xs)=d.(([x]++(filter.(chk.x).xs)))::c.(filter.(chk1.x).xs)

z.xs.ys=c.(b.xs.ys)
-------------------------------------
e.[].y=False
e.(x::xs).y
      |x==y=True
      |otherwise=e.xs.y

e1.(x::xs).[]=[]
e1.(x::xs).(y::ys)
      |(e.(x::xs).y)=True::e1.(x::xs).ys
      |otherwise=e1.(x::xs).ys

e2.[]=True
e2.(x::xs)
    |x==False=False
    |otherwise=e2.xs

e3.(x::xs).(y::ys)=e2.(e1.(x::xs).(y::ys))

f1.xs.[]=True
f1.(xs).(y::ys)
     |(notElem.y.xs)=False
     |otherwise=f1.xs.ys
-----------------------------------------

