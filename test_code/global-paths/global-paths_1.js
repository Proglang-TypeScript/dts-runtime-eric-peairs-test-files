var paths = require('global-paths');
console.log(paths());

// results in (with my setup - macbook pro)
[ '/Users/jonschlinkert/dev/path-utils/global-paths/node_modules',
  '/usr/local/lib/node_modules',
  '/Users/jonschlinkert/dev/path-utils/node_modules',
  '/Users/jonschlinkert/dev/node_modules',
  '/Users/jonschlinkert/node_modules',
  '/Users/node_modules',
  '/usr/lib/node_modules',
  '/node_modules' ]
