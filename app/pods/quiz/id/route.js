import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    return this.store.findRecord('quiz', params.id, {
      include: 'questions,user'
    })
  }
});
