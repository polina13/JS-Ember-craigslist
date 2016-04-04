import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('location', params.location_id);
  },

  actions: {
    deleteLocation(model) {
      var location_deletions = model.get('posts').map(function(post) {
        return post.destroyRecord();
      });
      Ember.RSVP.all(location_deletions).then(function() {
        return model.destroyRecord();
      })
      this.transitionTo('index');
    }
  }
});
