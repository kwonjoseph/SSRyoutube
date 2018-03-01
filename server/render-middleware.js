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
      maxResults: 6,
      type: 'video'
    }), function (error, response, body) {
      let videoResults = JSON.parse(body);
      request(uriBuilder('https://www.googleapis.com/youtube/v3/commentThreads', {
        key: process.env.YOUTUBE,
        part: 'snippet',
        videoId: videoResults.items[0].id.videoId,
        maxResults: 10
      }), function (err, resp, bod) {
        let commentResults = JSON.parse(bod);
        console.log(commentResults.items[0].snippet.topLevelComment);
        const html = ReactDOMServer.renderToString(<App currentVideo={videoResults.items[0]} similarVideos={videoResults.items.slice(1)} comments={commentResults.items}/>);
        fs.readFile('./dist/index.html', 'utf8', function (err, data) {
          if (err) throw err;
          const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
          res.send(document);
        });
      })

  });
};

export default handleRender;
