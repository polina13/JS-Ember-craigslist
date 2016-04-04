import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  posts: DS.hasMany('post', {async: true}),
  //example of computed property within model
  fullLocation: Ember.computed('name', 'state', 'country', function() {
    return this.get('name') + ', ' + this.get('state') + ' | ' + this.get('country');
  })
});
//can be referenced on location.hbs, by accessing model hook, via model.fullLocation
