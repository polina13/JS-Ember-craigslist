import Ember from 'ember';

export default Ember.Component.extend({
  fullPost: Ember.computed('post.author', 'post.category', function() {
    return this.get('post.author') + ' | ' + this.get('post.category');
  })
});
