ctype Op where
        Plus,Mul : Op
       
ctype Exp where
          Const : Int->Exp
	  Var   : String->Exp
	  Br    : Op->Exp->Exp->Exp

l = [("x",3), ("y",5),("z",6)]

lt.t = lookup.t.l

lookup.t.((a,b)::xs)
	| t==a = b
	| otherwise = lookup.t.xs
	
eval.(Const.t)	     = t
eval.(Var.t)         = lt.t
eval.(Br.Plus.ln.rn) = eval.ln + eval.rn
eval.(Br.Mul.ln.rn)  =  eval.ln * eval.rn
