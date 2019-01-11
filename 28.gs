rm:Int->[Int]->[Int]
rm.x.(y::ys)
  |x==y=rm.ys
  |otherwise=rm.x.ys
