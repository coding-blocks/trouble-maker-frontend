import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveCourse () {
      return this.get('question').save().then(question => {
        this.transitionToRoute('questions.id', question.id)
      })
    }
  }
});
