import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.store.query('quiz', {
      include: 'user'
    })
  },
  setupController (controller, model) {
    controller.set("quizzes", model)
  }
});
