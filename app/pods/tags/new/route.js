import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  currentUser: service(),
  model () {
    const newTag = this.store.createRecord('tag', {})
    newTag.set('createdBy', this.get('currentUser.user'))
    return newTag
  },
  setupController (controller, model) {
    controller.set("tag", model)
  }
});
