import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      locations: this.store.findAll('location'),
      posts: this.store.findAll('post')
    });
  },
  actions: {
    
  }
});
