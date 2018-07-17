import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  currentUser: service(),
  model () {
    return this.store.createRecord('question', {
      title: 'This is a new question, enter title here',
      description: 'Edit this description',
      user: this.get('currentUser.user')
    })
  },
  setupController (controller, model) {
    controller.set("question", model)
  }
});
