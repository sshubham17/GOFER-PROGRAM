f:[[a]]->[[a]]
f.([]::xs)=[[]]
f.(x::xs)=(map.head.(x::xs))::f.(map.tail.(x::xs))

--g.[[]]=[[]]
--g.(x::xs)
--   |x==[]=[0]::g.xs
--   |otherwise=x::g.xs