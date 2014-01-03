chamber(function browser(c) {

  c.loadModule('hello-message').then(function (messageText) {

    var document = c.env.browser.window.document;

    var h1 = document.createElement('h1');

    h1.innerText = messageText;

    document.body.appendChild(h1);

    c.resolve();

  });

});