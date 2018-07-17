import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveCourse () {
      this.get('question').save().then(question => {
        this.transitionToRoute('questions.id', question)
      })
    }
  }
});
