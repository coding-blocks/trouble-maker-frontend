import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    queryParams: {
        questionId: {
            refreshModel: true
        }
    },
    model(params) {
        const quiz = this.modelFor('quiz/id')
        const questionId = params.questionId || quiz.hasMany('questions').ids()[0]
        if (!questionId) {
            //In case there are no questions in the quiz
            return {quiz}
        }
        const question = this.store.findRecord('question', questionId)
        return RSVP.hash({quiz, question})
    },
    setupController(controller, model) {
        controller.set('quiz', model.quiz)
        controller.set('question', model.question)
    }
});
