var unique = require('array-unique');

var arr = ['a', 'b', 'c', 'c'];
console.log(unique(arr)) //=> ['a', 'b', 'c']
console.log(arr)         //=> ['a', 'b', 'c']

/* The above modifies the input array. To prevent that at a slight performance cost: */
var unique = require("array-unique").immutable;

var arr = ['a', 'b', 'c', 'c'];
console.log(unique(arr)) //=> ['a', 'b', 'c']
console.log(arr)         //=> ['a', 'b', 'c', 'c']
