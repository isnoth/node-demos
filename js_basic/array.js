

var l = [1,2,3,4,5,6]

//filter
filtered = l.filter(function(item){
    return item>5
})
console.log(filtered)

//map
mapped = l.map(function(item){
    return item+100
})
console.log(mapped)
