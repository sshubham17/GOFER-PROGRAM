d.x=x/10

rev.0=[]
rev.x=(mod.x.10)::rev.(d.x)

swap.[]=[]
swap.[x]=[x]
swap.(x::y::xs)=y::x::swap.xs

re.x=(rem.x.10)

con.[].l2=l2
con.l1.[]=l1
con.(x::xs).ys=x::con.xs.ys
conc.[]=0
conc.(x::xs)=(x)+conc.xs
