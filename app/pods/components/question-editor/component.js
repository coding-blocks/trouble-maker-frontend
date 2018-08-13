import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  api: service(),
  notify: service(),
  isEditing: false,
  actions: {
    toggleEditing () {
      this.toggleProperty('isEditing')
    },
    addChoice () {
      const newChoice = this.get('store').createRecord('choice')
      newChoice.set('question', this.get('question'))

      this.get('question.choices').addObject(newChoice)
    },
    saveQuestion () {
      const onSuccess = () => this.get('notify').success('Saved Successfully')

      if (typeof this.get('onSave') === 'function') {
        this.get('onSave')().then(onSuccess)
      } else {
        this.get('question').save().then(onSuccess)
      }
    },
    markChoice (choice, flag) {
      let correctChoices = this.get('correctChoices')

      if (!choice.get('id'))
        return this.get('notify').error('You must edit and save this choice first before marking it!')

      if (flag == 'incorrect') {
        // need to mark this choice as incorrect
        // remove from correctChoices Array
        const index = correctChoices.indexOf(choice.id)
        correctChoices.splice(index, 1)
      } else {
        correctChoices.push(choice.id)
      }

      this.get('api').request(`/questions/${this.get('question.id')}/answers`, {
        method: 'PATCH',
        data: {
          correctAnswers: correctChoices
        }
      }).then(() => {
        this.set('correctChoices', [...correctChoices])
      })


    }
  }
});
