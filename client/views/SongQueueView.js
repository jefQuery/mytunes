  // SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagname: 'table',

  initialize: function() {
    console.log('SongQueueView initialized');
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.render();
  },

  render: function() {
    console.log('SongQueueView render invoked');
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(song => {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
