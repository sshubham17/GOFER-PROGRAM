list.[].n=[]
list.(x::xs).n=drop.n.(x::xs)++take.n.(x::xs)


lis1.n.(x::xs)
    |(n>1)=[[x]]::lis1.(n-1).(xs)
    |otherwise=(x::xs)