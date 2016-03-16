var promise = require('bluebird')
//var $ = require('jquery')
 var env = require('jsdom').env
    , html = '<html><body><h1>Hello World!</h1><p class="hello">Heya Big World!</body></html>'
    ;

 env(html, function (errors, window) {
    console.log(errors);

    var $ = require('jquery')(window);

    console.log($('.hello').text());

    $.get('http://www.baidu.com', function(result){
      console.log(result)
    })

    promise.resolve($.get('http://www.baidu.com'))
    .then(function(data){
      console.log(data)
    })
  });
