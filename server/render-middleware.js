import request from 'request';
import fs from 'fs';
import uriBuilder from '../src/uri-builder.js';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/app.js';
import videoDB from '../database/index.js';

const handleRender = function(req, res) {
  request(uriBuilder('https://www.googleapis.com/youtube/v3/search', {
      key: process.env.YOUTUBE || 'AIzaSyB40f6IGhdSn8WU89JQ8WdtLdUsW5O3X8Y',
      part: 'snippet',
      q: req.query.term || 'Youtube API Overview',
      maxResults: 6,
      type: 'video'
    }), function (error, response, body) {
      let videoResults = JSON.parse(body);
      let currentVideo = videoResults.items[0]
      request(uriBuilder('https://www.googleapis.com/youtube/v3/commentThreads', {
        key: process.env.YOUTUBE,
        part: 'snippet',
        videoId: videoResults.items[0].id.videoId,
        maxResults: 10
      }), function (err, resp, bod) {
        let commentResults = JSON.parse(bod);
        request(uriBuilder('https://www.googleapis.com/youtube/v3/videos', {
          key: process.env.YOUTUBE,
          part: 'statistics',
          id: videoResults.items[0].id.videoId,
        }), function (Error, Res, Body) {
          let likeResults = JSON.parse(Body);
          videoDB.addVideo({thumbnail: currentVideo.snippet.thumbnails.default.url, title: currentVideo.snippet.title}, function(err, data) {
            if(err) throw err;
            videoDB.selectAll(function(Err, datas) {
              if(Err) throw Err;
              fs.readFile('./dist/index.html', 'utf8', function (er, fileData) {
                if (er) throw er;
                const html = ReactDOMServer.renderToString(<App currentVideo={currentVideo} similarVideos={videoResults.items.slice(1)} comments={commentResults.items} videoHistory={datas.slice(datas.length - 5).reverse()} rating={likeResults.items[0].statistics}/>);
                const document = fileData.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
                res.send(document);
              });
            });
          });
        });
      });
    });
};


export default handleRender;
