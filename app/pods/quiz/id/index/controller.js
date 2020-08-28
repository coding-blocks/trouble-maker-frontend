import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        saveQuiz() {
            return this.get('model').save()
        }
    }
});
