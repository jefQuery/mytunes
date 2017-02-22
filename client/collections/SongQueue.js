// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

// Server: http://parse.sfm8.hackreactor.com/
  model: SongModel,

  initialize: function() {

    //shoud include enqueue, dequeue and playNext methods as well
    // refactor initialize function

    // this.on('add', this.enqueue, this);
    // this.on('ended', this.dequeue, this);
    // this.on('dequeue', this.playNext, this);
    // console.log('SongQueue initialized');
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
  
  enqueue: function () {
  //check song position
  // if length is 1
    if (this.length === 1) {
  // play first or play next
      this.playNext();
    }
  },

  dequeue: function () {
  // check position
    if (this.at(0) === 'song') {
  // if position zero, play nextt
      this.playNext();
    } else {
  // else remove
      this.remove('song');
    }
  },

  playNext: function () {
  // shift position
    this.shift();
  //if index >is 1
    if (this.length >= 1) {
      this.playFirst();
    } else {
  //trigger stop
      this.trigger('stop');
    }
  },

  playFirst: function() {
    if (this.at(0)) {
      this.at(0).play();
      console.log('playFirst invoked');
    }
    //play the first song in the queue
  },

});