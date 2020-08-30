import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    actions: {
        selectChoiceAndMark(questionNumber, choiceId) {
            this.get('selectChoice')(questionNumber, choiceId)
        }
    },
    selectedChoice: Ember.computed('questionNumber', 'answers', function () {
        let questionNumber = this.get('questionNumber')
        let answers = this.get('answers')
        let index = answers.findIndex(obj => obj.id == questionNumber)
        if (index > -1) {
            return answers[index].markedChoices[0]
        }
        return null
    })
})
