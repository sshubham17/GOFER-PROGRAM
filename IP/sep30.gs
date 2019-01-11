mat.x.sv.ev=fun1.x.sv.ev.[sv]

fun1.x.sv.ev.pre=fun3.(fun2.(x!!(sv-1)).1.ev.pre.x).sv

fun2.[].x.ev.pre.y=[]
fun2.(x::xs).n.ev.pre.y
                        |x==1 && n==ev=[ev]::fun2.xs.(n+1).ev.pre.y
			|x==1 &&(check.pre.n)=(fun1.y.n.ev.(n::pre)) ++ fun2.xs.(n+1).ev.pre.y
			|otherwise = fun2.xs.(n+1).ev.pre.y

fun3.[].y=[]
fun3.(x::xs).y=(y::x)::fun3.xs.y
check.[].n=True
check.(x::xs).n
                |x==n = False
		|otherwise = check.xs.n