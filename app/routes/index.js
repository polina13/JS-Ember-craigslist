import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      locations: this.store.findAll('location'),
      posts: this.store.findAll('post')
    });
  },
  actions: {
    saveLocation(params) {
      var newLocation = this.store.createRecord('location', params);
      newLocation.save();
      this.transitionTo('index');
    },
  }
});
