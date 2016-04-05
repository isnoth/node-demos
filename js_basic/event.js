var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign')

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],
}) 
console.log(ListStore)
