----compare.x.sv.ev=compare.x.sv.ev.[sv] 

-------accept.sv.ev.ls=compair.x.(ls!!sv)::[compair.x.(ls!!ev)]

find.[].sv.ev=[]
find.(x::xs).sv.ev=find1.x.sv.ev
find1.(x1::xs1).sv.ev
                   |ev==x1=(sv)::find.xs1.sv.ev
	           |otherwise=find.xs1.sv.ev

--fun1.[].sv.ev=[]
---fun1.(x1::xs1).sv.ev