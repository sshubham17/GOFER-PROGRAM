nth: [Int] -> Int -> Int
--nth.[].n=undefined
nth.(x::l).0=x
nth.(x::l).n=nth.l.(n-1)

inner: [Int] -> [Int] -> Int
inner.[].[]=0
inner.l1.[]=0
inner.[].l1=0
inner.(x::l1).(y::l2)=(x*y)+inner.l1.l2

take1: [Int] -> Int -> [Int]
take1.(x::l).0=[]
take1.(x::l).n=x::s
   where s=take1.l.(n-1)

take2.(x::xs).0=[]
take2.(x::xs).n=x::take2.xs.(n-1)


m.x.y 
     | x <= y = y
     | otherwise = x

f.x=if(x>100)
     then x else (x-1)

--gcd1.x.1=1
--gcd1.1.y=1
--gcd1.x.y=fgcd.x.y.y

--fgcd.x.y.p=check1.x.y.p.(mod.(x).(p)).(mod.(y).(p))

--check1.xy.p.(0).(0)=p
--check1.xy.p.g1.g2=fgcd.x.y.(p-1)

--find.[].sv.ev=[]
--find.(x::xs).sv.ev=find1.x.sv.ev
--find1.(x1::xs1).sv.ev
--                   |ev==x1=(sv)::find.xs1.sv.ev
--	           |otherwise=find.xs1.sv.ev

combs.0.xs=[[]]
combs.(n+1).[]=[]
combs.(n+1).(x::xs) = map.(x::).(combs.n.xs) ++ combs.(n+1).xs