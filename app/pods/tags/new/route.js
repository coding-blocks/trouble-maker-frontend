import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  currentUser: service(),
  model () {
    return this.store.createRecord('tag', {})
  },
  setupController (controller, model) {
    controller.set("tag", model)
  }
});
