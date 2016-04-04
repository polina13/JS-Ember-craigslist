import Ember from 'ember';

export function locationPopularity(params) {
  var location = params[0];
  if (location.get('posts').get('length') >=3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-alert"></span>');
  }
}

export default Ember.Helper.helper(locationPopularity);
