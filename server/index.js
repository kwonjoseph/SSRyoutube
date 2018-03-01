import express from 'express';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/index.js';
const app = express();
const serverSideRender = function(req, res) {
  const html = ReactDOMServer.renderToString(<App />);

  fs.readFile('./dist/index.html', 'utf8', function (err, data) {
    if (err) throw err;
    const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
    res.send(document);
  });
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', ServerSideRender);

const port = process.env.PORT || 1337
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
