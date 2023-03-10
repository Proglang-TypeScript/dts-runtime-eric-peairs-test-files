var repeat = require('repeat-element');

repeat('a', 5);
//=> ['a', 'a', 'a', 'a', 'a']

repeat('a', 1);
//=> ['a']

repeat('a', 0);
//=> []

repeat(null, 5)
//» [ null, null, null, null, null ]

repeat({some: 'object'}, 5)
//» [ { some: 'object' },
//    { some: 'object' },
//    { some: 'object' },
//    { some: 'object' },
//    { some: 'object' } ]

repeat(5, 5)
//» [ 5, 5, 5, 5, 5 ]
