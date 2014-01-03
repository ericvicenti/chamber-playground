chamber(function(c) {

  console.log('Running hello-message.js');

  var message = '';

  c.loadModule('underscore').done(function(_) {

    _.each(['a', 'b', 'c'], function(a) {
      message += a;
    });

    message += ' Hello, sane modules! (run on '+c.env.title+')';

    c.resolve(message)

  });

  c.loadModule('folder/asdf').done(function(asdf) {

    // _.each(['a', 'b', 'c'], function(a) {
    //   message += a;
    // });

    message += ' asdf';

  });

});