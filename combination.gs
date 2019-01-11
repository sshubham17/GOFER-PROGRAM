s.0=[]
s.(n)=s.(n-1)++[n]

c.0.xs=[[]]
c.(n+1).[]=[]
c.(n+1).(x::xs)=map.(x::).(c.n.xs)++c.(n+1).xs

cc.n.(x::xs)=c.(n+1).(x::xs)

--ccc.0.(x::xs)=[]
ccc.(x::xs)=(cc.(2).(x::xs))

cccc.xs.0=[]
--cccc.[].n=[]
cccc.(x::xs).n=(ccc.(x::xs)).(n-1)