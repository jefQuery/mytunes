// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.on('all', this.render, this);
  },

  render: function() {
    this.collection.forEach(this.render, this);
    return this.$el;
  }

});
