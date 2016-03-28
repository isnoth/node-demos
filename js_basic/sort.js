

//sort by a special key, from stackoverflow
var a = [{key: 1}, {key: 4}, {key: 2}]
var b = a.sort(function(a,b){
  if (a.key> b.key) return 1
  if (a.key< b.key) return -1
  return 0
})
console.log(b)

