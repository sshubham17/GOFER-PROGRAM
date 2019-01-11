--[1]program for sum of list.
--sum1:[Int]->Int
sum1.[]=0
sum1.(x::xs)=x+sum1.xs

--[2]program for length of list.
--len1:[Int]->Int
len1.[]=0
len1.(x::xs)=1+len1.xs

--[3]program for append for two list.
--app1:[Int]->[Int]->[Int]
app1.[].l2=l2
app1.(x::l1).l2=x::app1.l1.l2

--[4]program for reverse for list.
--rev1:[a]->[a]
rev1.[]=[]
rev1.(x::xs)=rev1.xs++[x]


