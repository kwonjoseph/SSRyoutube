import express from 'express';
import handleRender from './render-middleware.js';
var videos = require('../database');
const app = express();

app.get('/', handleRender);
app.get('/search', handleRender);
app.use(express.static(__dirname + '/../dist/'));

const port = process.env.PORT || 1337
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
