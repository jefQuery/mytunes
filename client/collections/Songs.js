// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs/',

  parse: function(response) {
    console.log(response);
    return response.results;
  },

  initialize: function() {
    this.fetch({
      data: {limit: 10},
    });

    // this.on('sync', this.parse, this);
  },
  //requests[0].respond(200, { 'Content-Type': 'application/json' }, fakeResponse);

  model: SongModel

});