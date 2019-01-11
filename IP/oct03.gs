--ctype Graph where
  --              Br1 : Int -> Graph -> Graph->Graph
  --		  Lf : Int-> Graph
		
----inorder: Graph -> [Int]
----inorder.(Lf.x)= [x]
----inorder.(Br1.x.lt.rt)=(inorder.lt)++[x]++(inorder.rt)

--preorder:Graph -> [Int]
--preorder.(Lf.x)=[x]
--preorder.(Br.x.lt.rt)=[x] ++ (preorder.lt) ++ (preorder.rt)

---postorder:Graph -> [Int]
---postorder.(Lf.x)=[x]
---postorder.(Br.x.lt.rt)=(postorder.lt) ++ (postorder.rt) ++ [x]

--mirror: Graph -> Graph
--mirror.(Lf.x)=Lf.x
--mirror.(Br1.x.lt.rt)=Br1.x.(mirror.rt).(mirror.lt)

--------------------------------------------
---ctype Ntree where
  ---            Emp: Ntree
  ---	      Br: Int ->[Ntree]-> Ntree
t3=Br.3.[]
t4=Br.4.[]
t2=Br.2.[Br.5.[]]
t1=Br.1.[t2,t3,t3]
---dfs: Ntree -> [Int]
---dfs.Emp= []
---dfs.(Br.x.lt)= [x]++ concat.[dfs.s|s<-lt]

--dfs: Ntree -> [Int]
---dfs.(Br.x.stl)= x::concat.[dfs.t | t <-stl]
--dfs.(br.x.stl)=  x ::[t' | t <- stl,t' <- dfs.t]
------------------------------------------------------------
--ctype ntree where
--               Et:ntree
--	       Br:Int ->[ntree]->ntree
t3=Br.3.[]
t4=Br.4.[]
t2=Br.2.[Br.5.[]]
t1=Br.1.[t2,t3,t3]

nextlevel :[ntree]->[ntree]
nextleve.tl=concat.[stl | Br.x.stl <- tl]