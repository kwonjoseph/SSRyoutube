import request from 'request';
import fs from 'fs';
import uriBuilder from '../src/uri-builder.js';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/app.js';

const handleRender = function(req, res) {
  request(uriBuilder('https://www.googleapis.com/youtube/v3/search', {
      key: process.env.YOUTUBE,
      part: 'snippet',
      q: req.query.term || 'Youtube API Overview',
      maxResults: 5,
      type: 'video'
    }), function (error, response, body) {
      const html = ReactDOMServer.renderToString(<App pathname={req.url} currentVideo={JSON.parse(body).items[0]} />);
      fs.readFile('./dist/index.html', 'utf8', function (err, data) {
        if (err) throw err;
        const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
        res.send(document);
      });
  });
};

export default handleRender;
