chamber(function server(c) {

  if (!c.env.node) throw new Error('Must run server in node');

  var express = c.env.node.require('express');

  var message = '';

  c.loadModule('hello-message').done(function (m) {

    message = m;

    var foo = c.Q.defer();

  });  
  
  c.resolve(function server() {

    var app = express();

    app.get('/', function(req, res) {

      return res.send('<h1>'+message+'</h1> '+c.getBrowserScriptTags('browser'));

    });

    c.serve(app, '/ch');

    return app;

  });

});