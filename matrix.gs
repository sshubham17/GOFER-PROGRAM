nth.[].n=[]
nth.(x::xs).0=x
nth.(x::xs).n=nth.xs.(n-1)

--mat.[].n=[]
--mat.(x::xs).n=mat.x+

f.(x,y)=x
s.(x,y)=y

pow.x.0=1
pow.x.y=x * pow.x.(y-1)

num=[('0',0),('1',1),('2',2),('3',3),('4',4),('5',5),('6',6),('7',7),('8',8),('9',9)]

f1.x.(n::num)
  |x==(f.(n))=(s.(n))
  |otherwise=f1.x.num
  
f2.[].num=0
f2.(x::xs).num=((f1.x.num)*(pow.10.(length.xs)))+f2.xs.num

list1.xs.ys=((f2.xs.num)*(f2.ys.num))

list2.0=0
list2.x=((mod.x.10)*(pow.10.((len.x)-1)))+list2.(div.x.10)

len.0=0
len.x=1+len.(div.x.10)

duplicate.xs.n
                | n==0 = []
                | otherwise = xs ++ duplicate.xs.(n-1)

duplicate.xs.n=xs++duplicate.xs.(n-1)

--scanString.x = if all (`elem` "0123456789") x
--                then read x :: Int
--                 else 0

--scanString'.x = if all isDigit x
--                then read x :: Int
--                else 0

scanChar.c
           | '0' <= c && c <= '9' = fromEnum.c - fromEnum.'0'
           | otherwise = -1