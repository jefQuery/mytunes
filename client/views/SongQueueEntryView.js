// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  
  //should create a click haandler that DEQUEUE'S the song
  events: {
    'click': function () {
      this.model.dequeue();
      this.remove();
    }
  },

  render: function(song) {
    console.log('SongQueueEntryView render was invoked');
    return this.$el.html(this.template(this.model.attributes));  
  }
});
