power.(x,0)=1.0
power.(0.0,y)=0.0
power.(x,y)= x *power.(x,(y-1.0))

npower.(x,y)=x/power.(x,y)

 