def bfs(t):
    tlist = [t]
    ac    = []
    while tlist != []:
    	  print "ac is %s tlist is %s" % (ac,tlist)
    	  tt,tl = tlist[0], tlist[1:]
	  x,stl = tt[0],tt[1]
	  ac,tlist = ac + [x],tl,stl
     return ac

t3 = [3,[]]
t4 = [4,[]]
t5 = [5,[]]
t2 = [2,[t5]]
t1 = [1,[t2,t5,t4]]