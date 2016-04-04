import Ember from 'ember';

export default Ember.Component.extend({
  updatePostShowForm: false,
  actions: {
    showForm() {
      this.set('updatePostShowForm', true);
    },

    updatePost(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        description: this.get('description'),
        category: this.get('category'),
        location: this.get('location')
      };
      this.sendAction('updatePost', post, params);
      this.set('updatePostShowForm', false);
    }
  }
});
