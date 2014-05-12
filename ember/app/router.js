var Router = Ember.Router.extend({
  location: ENV.locationType
});

// ember/app/router.js
Router.map(function() {
  this.route('about');
  this.resource('speakers', function() {
    this.route('show', {path: ':speaker_id'});
  });
});

export default Router;
