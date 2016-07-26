
var f1 = function(){
  var stack = new Error().stack
  console.log( stack )
}

var f2 = function(){
  var stack = new Error().stack
  console.trace("Here I am!")
}

f1()
f2()
