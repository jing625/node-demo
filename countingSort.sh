//入桶//
a <- {'0':23,
      '1':13,
      '2':3,
      '3':23,
      '4':33,
      '5':23,
      '6':7,
      '7':2,
      '8':3,
      'length':9
}
hash <- {}
index <- 0
while index < a{'length'}
    number <- a{index}
    if hash{number} == undefine
        hash{number} = 1
    else
        hash{number} <- hash{number} + 1
    end
    index <- index + 1
end

//出桶//
index2 <- 0
max <- findMax(a)
newArr <- {}
while index2 <= max
    count <- hash{index2}
    if count != undefine
        countIdex <- 0
        while countIdex < count
            newArr.push(index2)
            countIdex <- countIdex + 1
        end
    end
    index2 <- index2 + 1
end
print newArr
