import Ember from 'ember';

export default Ember.Component.extend({
   updateLocationShowForm: false,
   actions: {
     showForm() {
       this.set('updateLocationShowForm', true);
     },
     updateLocation(model) {
       var params = {
         name: this.get('name'),
         state: this.get('state'),
         country: this.get('country')
       };
       this.sendAction('updateLocation', model, params);
       this.set('updateLocationShowForm', false);
     }
   }
});
