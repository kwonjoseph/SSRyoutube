var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var videoSchema = mongoose.Schema({
  thumbnail: String,
  title: String
});

var Video = mongoose.model('video', videoSchema);

var selectAll = function(callback) {
  video.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};


var addVideo = function(video, callback) {
  let newVideo = new Video(video);
  newVideo.save(function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.addVideo = addVideo;
module.exports.video = Video;
