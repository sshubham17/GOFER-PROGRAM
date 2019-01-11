str.[]=0
str.(x::xs)=1+str.xs

str1.[]=0
str1.(x::xs)
   |x==' '=1+str1.xs
   |otherwise=str1.xs

str2.[].[]=[]
str2.l1.[]=l1
str2.[].l2=l2
str2.(x::xs).(y::ys)
--    |x==y=str2.xs.ys
    |x/=y=x::y::str2.xs.ys
    |otherwise=str2.xs.ys

str3.[].[]=[]
str3.l1.[]=l1
str3.(x::xs).(y::ys)
    |x/=y=x::str3.xs.ys
    |otherwise=str3.xs.ys

str4.[]=[]
str4.[x]=[x]
str4.(x::y::xs)
    |x/=y=x::str4.(y::xs)
    |otherwise=str4.(y::xs)

str5.[]=[]
str5.xs=str4.(sort.xs)

alter.[]=[]
alter.(x::y::xs)=x::alter.xs
