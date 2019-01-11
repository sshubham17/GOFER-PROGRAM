Gofer Version 2.30a
Modifications for pugofer Rusi Mody
Copyright (c) Mark P Jones 1991-1994
Copyright (c) Rusi P Mody  1995-2016

Gofer session for:
/home/shubham/gofer/pusimple.pre
? 
Gofer session for:
/home/shubham/gofer/pusimple.pre
/home/shubham/gs/graph.gs
? pos.[(2,4),(1,3),(2,4),(1,3)].(2)
-2 : Int
? pos.[(2,4),(1,3),(2,4),(1,3)].(2)
-2 : Int
? 
Gofer session for:
/home/shubham/gofer/pusimple.pre
/home/shubham/gs/graph.gs
? pos.[(2,4),(1,3),(2,4),(1,3)].(2)

Program error: {pos.[].(-2)}


? 
ERROR "/home/shubham/gs/graph.gs" (line 11): Type error in function binding
*** term           : pos
*** type           : [d] -> Int -> Int
*** does not match : [a] -> b -> [c]

? 
ERROR "/home/shubham/gs/graph.gs" (line 11): Type error in function binding
*** term           : pos
*** type           : [d] -> Int -> Int
*** does not match : [a] -> b -> [c]

? 
ERROR "/home/shubham/gs/graph.gs" (line 11): Undefined variable "x"
? 
Gofer session for:
/home/shubham/gofer/pusimple.pre
/home/shubham/gs/graph.gs
? pos.[(2,4),(1,3),(2,4),(1,3)].(2)

ERROR: Type error in application
*** expression     : pos.[(2,4),(1,3),(2,4),(1,3)].2
*** term           : [(2,4),(1,3),(2,4),(1,3)]
*** type           : [(Int,Int)]
*** does not match : [[a]]

? pos.[(2,4),(1,3),(2,4),(1,3)].(2)
ERROR: Type error in application
*** expression     : pos.[(2,4),(1,3),(2,4),(1,3)].2
*** term           : [(2,4),(1,3),(2,4),(1,3)]
*** type           : [(Int,Int)]
*** does not match : [[a]]

? pos.[1,2,3,4,5].2
ERROR: Type error in application
*** expression     : pos.[1,2,3,4,5]
*** term           : [1,2,3,4,5]
*** type           : [Int]
*** does not match : [[a]]

? pos.[1,2,3,4,5].2
ERROR: Type error in application
*** expression     : pos.[1,2,3,4,5].2
*** term           : [1,2,3,4,5]
*** type           : [Int]
*** does not match : [[a]]

? 
Gofer session for:
/home/shubham/gofer/pusimple.pre
/home/shubham/gs/nthelement.gs
? nth.[1,2,3,4].(2)

ERROR: Type error in application
*** expression     : nth.[(2,4),(1,3),(2,4),(3,1)].2
*** term           : [(2,4),(1,3),(2,4),(3,1)]
*** type           : [(Int,Int)]
*** does not match : [Int]

? nth.[1,2,3,4].(2)
3 : Int
? mat


