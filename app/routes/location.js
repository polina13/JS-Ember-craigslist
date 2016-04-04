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
    },
    updateLocation(model, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          model.set(key, params[key]);
        }
      });
      model.save();
      this.transitionTo('index');
    },
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      var location = params.location;
      location.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return location.save();
      });
      this.transitionTo('location', params.location);
    }
  }
});
