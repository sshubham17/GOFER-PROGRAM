len.[]=0.0
len.(x::xs)=1.0+len.xs

list:[Float]->Float->[Float]
list.[].n=[]
list.(x::xs).n
   |len.(x::xs)/=n=x::list.xs.n
   |otherwise=list.xs.n

listt.[].n=[]
listt.(x::xs).n=list.x.n::listt.xs.(n-1.0)

list1.[].n=[]
list1.(x::xs).n
    |len.(x::xs)==n=x::list1.xs.n
    |otherwise=list1.xs.n

listtt.[].n=[]
listtt.(x::xs).n=list1.x.n::listtt.xs.(n-1.0)

listi.[].n=[]
listi.(x::xs).n=list1.(x::xs).n ++ list.(x::xs).n

listti.[].n=[]
listti.(x::xs).n=listi.x.n::listti.xs.(n-1.0)

mul.[].zs=[]
mul.xs.[]=[]
mul.(x::xs).(y::ys)=x*y::mul.xs.ys

sub.[]=0.0
sub.(x::xs)=x-sub.xs

mulsub.(x::xs).(y::ys)=sub.(mul.(x::xs).(y::ys))

--mullsub.[].ys=[]
--mullsub.(x::xs).(ys)=mulsub.(x).(ys)::mullsub.xs.ys

eval.(x::xs).(y::ys).(zs)=((y-(mulsub.xs.zs))/x)

evalu.[].ys.zs=[]
evalu.(x::xs).(y::ys).(zs)=(eval.(x).(y::ys).zs) :: evalu.xs.ys.zs

eva.(x::xs).(ys).zs.n=evalu.(listti.(x::xs).n).ys.zs

fun.xs.ys.zs.0=[]
fun.xs.ys.zs.m=zs::fun.xs.ys.(eva.xs.ys.zs.(3.0)).(m-1)