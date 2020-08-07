import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  currentUser: service(),
  model () {
    const newQuestion = this.store.createRecord('question', {})
    newQuestion.set('user', this.get('currentUser.user'))
    return newQuestion
  },
  setupController (controller, model) {
    controller.set("question", model)
    controller.set("difficultyLevels", ['EASY' , 'MEDIUM', 'HARD'])
  }
});
