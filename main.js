var chamber = require('chamber');
var path = require('path');

// chamber.loadModule('server', {

//   baseDir: path.join(__dirname, './src')

// }).done(function(server) {

//   var app1 = server().listen(8080);
//   var app2 = server().listen(8888);

//   console.log('CREATED 2 SERVERS ON 8080 AND 8888')

// });

chamber.scanModule('server', {

  baseDir: path.join(__dirname, './src')

}).done(function(scan) {

  console.log('SCAN DONE ', scan)

});