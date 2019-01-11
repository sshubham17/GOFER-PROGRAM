tk.(x::l).0=[]
tk.[].n=undefined
tk.(x::l).n=x::s
       where
         s=tk.l.(n-1)

------inner:[Int] -> [Int] -> Int
inner.[].[]=0
inner.l1.[]=undefined
inner.[].l2=undefined
inner.(x::l1).(y::l2)=(x*y)+inner.l1.l2


nth.[].n=undefined
nth.l.0=undefined
nth.(x::l).0=x
nth.(x::l).n=nth.l.(n-1)

add1.[]=[]
add1.(x::xs)=x+1::add1.xs

--mul2.[]=[]
mul2.(x::xs)=x*2::mul2.xs

lord.[]=[]
lord.(x::xs)=ord.1::lord.xs
lord=list_mapper.(*2)


list_mapper:(Int->Int)->([Int]->[Int])
list_mapper.f=each
     where
       each.[]=[]
       each.(x::xs)=f.x::each.xs


list_reduce.op.id[]=undefined
list_reduce.op.id(x::l)=undefined







