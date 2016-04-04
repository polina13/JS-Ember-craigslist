import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  }),
  description: DS.attr('string'),
  category: DS.attr('string'),
  image: DS.attr('string'),
  location: DS.belongsTo('location', {async: true})
});
