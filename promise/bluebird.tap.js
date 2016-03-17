var promise = require("bluebird")
var fs = require('fs')

var fsAsync = function(filename){
  return new promise(function(resolve, reject){
    fs.readFile(filename, 'utf8', function(err, data){
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

fsAsync('a.log')
.then(function(data){
  return fsAsync('b.log')
})
.tap(function(data){
  console.log('tap: ', data)
})
.then(function(data){
  console.log('finally: ', data)
})
