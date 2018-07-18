import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service'

export default Route.extend({
  api: service(),
  model (params) {
    return RSVP.hash({
      question: this.store.findRecord('question', params.id, {
        include: 'user,choices'
      }),
      answers: this.api.request(`/questions/${params.id}/answers`)
    })
  },
  setupController (controller, model) {
    controller.set("question", model.question)
    controller.set("correctChoices", model.answers.correctAnswers)
  }
});
