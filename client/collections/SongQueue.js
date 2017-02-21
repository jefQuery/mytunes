// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

// Server: http://parse.sfm8.hackreactor.com/
  model: SongModel,

  initialize: function() {
    console.log('SongQueue initialized');
    this.on('add', (song) => {
      if (this.at(0) === song) {
        this.playFirst();
      }
    });
      
    this.on('ended', () => {
      this.shift();
      if (this.length > 0) {
        this.playFirst(); 
      }
    });

    this.on('dequeue', () => {
      this.remove();
    });

  },

  playFirst: function() {
    if (this.at(0)) {
      this.at(0).play();
      console.log('playFirst invoked');
    }
    //play the first song in the queue
  },

});