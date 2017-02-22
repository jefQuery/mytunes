// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    console.log('SongModel play invoked');
  },
  enqueue: function() {
    this.trigger('enqueue', this);
    console.log('SongModel enqueue invoked');
  },
  dequeue: function() {
    this.trigger('dequeue', this);
    console.log('SongModel dequeue invoked');
  },
  ended: function() {
    this.trigger('ended', this);
    console.log('SongModel ended invoked');
  }


});
