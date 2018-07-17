import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    return this.store.findRecord('question', params.id, {
      include: 'user'
    })
  },
  setupController (controller, model) {
    controller.set("question", model)
  }
});
