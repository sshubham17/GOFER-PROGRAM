str.[]=[]
str.(x::xs)
    |(x=='_'||x=='\t'||x=='\n')=' '::str.xs
    |otherwise=([x])++str.xs