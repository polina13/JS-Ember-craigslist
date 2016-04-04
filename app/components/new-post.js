import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showForm() {
      this.set('addNewPost', true);
    },
    savePost() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        category: this.get('category'),
        image: this.get('image'),
        location: this.get('location')
      };
      this.sendAction('savePost', params);
      this.set('addNewPost', false);
    }
  }
});
