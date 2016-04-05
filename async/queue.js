var async = require('async')
var fs = require('fs')


var delay = function(time, callback){
  setTimeout(function(){
    callback(null)
  }, time)
}



var q = async.queue(function(args, callback) {  //只有两个参数, 第二个为callback!!!
  delay(args, function(){
    callback(null)
  })
}, 2)



var l = [1000, 1000, 1000]


l.forEach(function(i){
  var filtered = q.tasks.filter(function(j){
    return j.data = i
  })

  if (filtered.length == 0){
    q.push(i, function(err, data){
      console.log(err, data)
    })
  }else{
    console.log('dulplicate find!')
  }
  //console.log('filtered: ', filtered)
})


//console.log(q.tasks)
//q.tasks[0].callback('a.log')

/*
delay(1000, function(){
  console.log('done')
})
*/
