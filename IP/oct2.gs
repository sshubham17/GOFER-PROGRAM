-- [0,1,1]
-- [1,0,0]
-- [1,0,0]

comp1.x=unique.[cprs.x|x<- [comp2.x.i.[i]|i<-[1...length.x]]]
--To find a multiple components 
comp2.x.s.pre=[s]++fun3.(find.(x!!(s-1)).1.pre).pre.x
--To find a component
fun3.[].pre.y=[]
fun3.(x::xs).pre.y=comp2.y.x.(x::pre)++fun3.xs.(x::pre).y


--To find a adjecent elements witch are not visited
find.[].n.pre=[]
find.(x::xs).n.pre
	|x==1&&not.(inpre.n.pre)=n::find.xs.(n+1).pre
	|otherwise=find.xs.(n+1).pre

-- To check element is previously visited or not	
inpre.n.[]=False
inpre.n.(x::xs)
	|n==x=True
	|otherwise=inpre.n.xs

--to find a A-B i.e elements in A but not in B
diff.[].pre.y=[]
diff.(x::xs).pre.y
	|not.(inpre.x.pre)=comp2.y.x.(x::pre)
	|otherwise=diff.xs.pre.y

--to create a list with no repeatition
cprs.x=cprs2.x.[]
cprs2.[].pre=[]
cprs2.(x::xs).pre
                   	|inpre.x.pre=cprs2.xs.pre
                      	|otherwise=x::cprs2.xs.(x::pre)

--To find a unique elements
unique.[]=[]
unique.((x::ys)::xs)
	                |check.x.xs=unique.xs
                   	|otherwise=(x::ys)::unique.xs
check.x.[]=False
check.x.(y::xs)
              	|inpre.x.y=True
                |otherwise=check.x.xs