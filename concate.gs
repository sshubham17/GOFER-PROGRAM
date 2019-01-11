concate.[].[]=[]
concate.x.y=x++y

len.[]=0
len.(x::xs)=1+len.xs

sub.[]=0
sub.(x::xs)=x-sub.xs

sub1.[]=0
sub1.[x]=x
sub1.(x::y::xs)=sub1.((x-y)::xs)

