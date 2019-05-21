import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  model (params) {
    return this.store.findRecord('tag', params.id)
  },
  setupController (controller, model) {
    controller.set("tag", model)
  }
});
