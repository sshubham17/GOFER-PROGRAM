
sub.(xs).[]=True
sub.[].ys=False
sub.(x::xs).(y::ys)
    |x==y=sub.xs.ys
    |otherwise=sub.xs.(y::ys)
sub1.[].ys=False
sub1.xs.[]=True
sub1.(x::xs).(y::ys)
 |x==y=sub1.xs.ys
 |otherwise=False
