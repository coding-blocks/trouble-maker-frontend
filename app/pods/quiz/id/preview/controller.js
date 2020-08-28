import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['questionId'],
    actions: {
        navigate(questionNumber) {
            this.set('question', questionNumber)
        }
    },
})
