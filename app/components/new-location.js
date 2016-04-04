import Ember from 'ember';

export default Ember.Component.extend({
  addNewLocation: false,
  actions: {
    showForm() {
      this.set('addNewLocation', true);
    },
    saveLocation() {
      var params = {
        name: this.get('name'),
        state: this.get('state'),
        country: this.get('country')
      };
      this.sendAction('saveLocation', params);
      this.set('addNewLocation', false);
    }
  }
});
