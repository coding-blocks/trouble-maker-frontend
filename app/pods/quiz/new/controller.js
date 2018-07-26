import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createQuiz () {
      return this.get('model').save().then(quiz => {
        this.transitionToRoute('quiz.id', quiz.id)
      })
    }
  }
});
