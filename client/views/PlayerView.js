// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    console.log('PlayerView initialized');

    this.$el.on('ended', (() =>{
      this.model.ended();
    }).bind(this));
  },

  setSong: function(song) {
    console.log('PlayerView setSong invoked');
    this.model = song;
    if (!this.model) {
      this.el.stop();
    }
    this.render();
  },

  render: function() {
    console.log('PlayerView render invoked');
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
