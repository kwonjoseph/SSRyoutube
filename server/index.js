const express = require('express');
const app = express();
app.use(express.static(__dirname + '/../dist/'));
const port = process.env.PORT || 1337
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
