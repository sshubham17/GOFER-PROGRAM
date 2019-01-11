--(1) convert number into binary---
f.0=[]
f.n
   |(mod.n.2)==1=1::f.(div.n.2)
   |(mod.n.2)==0=0::f.(div.n.2)
---same as (1)----
g.0=[]
g.n=reverse.(f.n)

num.0=[]
num.x=(mod.x.2)::num.(div.x.2)
----------------------------------
nu.0=[]
nu.x=reverse.(num.x)

num1.[]=[]
num1.(x::xs)=num.(x)::num1.xs

len.(xs)
   |length.xs==3=True
   |otherwise=False

leng.[]=[]
leng.(x::xs)
    |len.x==False=(0::x)::leng.xs
    |otherwise=leng.xs

------------------------------
---no of pattern in binary-------
get.[]=[]
get.(x::xs)=[x]::get.xs

bin.[].ys=[]
bin.(x::xs).ys=map.(x::).ys++bin.xs.ys

bi.xs.ys.0=ys
bi.xs.ys.n=bi.xs.(bin.xs.ys).(n-1)

pattern.n=bi."01".(get."01").(n-1)
----------------------------------
