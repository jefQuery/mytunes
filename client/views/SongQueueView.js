// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    console.log('SongQueueView initialized');
    console.log(this);
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  
  },

  render: function() {
    console.log('SongQueueView render invoked');
    console.log(this.models);
    this.$el.children().detach();
    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
