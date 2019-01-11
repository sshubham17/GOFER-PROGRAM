ctype NTree where
            Br : Int ->[NTree]->NTree
t3=Br.3.[]
t4=Br.4.[]
t2=Br.2.[Br.5.[]]
t1=Br.1.[t2,t3,t4]

dfs : NTree -> [Int]

dfs.(Br.x.stl)=x::concat.[dfs.t | t <-stl]

nextlevel :[NTree]->[NTree]
nextlevel.tl=concat.[stl | Br.x.stl <- tl]

thislevel.tl=[x|Br.x.stl<-tl]


bfs.t= thislevel.(concat.(takeWhile.(/=[]).(iterate.nextlevel.(t::[]))))

bfs' = (::[]); iterate.nextlevel; takeWhile.(/=[]); concat; thislevel
bfs''.t=bfs2.[t].[]
bfs2.[].ac = ac
bfs2.((Br.x.stl)::tl).ac = [x]++bfs2.(tl++stl).ac

bfs3.[].ac=ac
bfs3.((Br.x.stl)::tl).ac=bfs3.(stl++tl).(ac++[x])