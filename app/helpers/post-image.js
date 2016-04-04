import Ember from 'ember';

export function postImage(params) {
  var postImage = params[0].get('image');
  console.log(postImage);
  if (postImage !== null) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-picture"></span>');
  };
}

export default Ember.Helper.helper(postImage);
