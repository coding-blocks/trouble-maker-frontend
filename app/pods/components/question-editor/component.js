import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  isEditing: false,
  actions: {
    toggleEditing () {
      this.toggleProperty('isEditing')
    },
    addChoice () {
      const newChoice = this.get('store').createRecord('choice', {
        title: 'New Choice',
        description: 'New Possibilitities'
      })
      newChoice.set('question', this.get('question'))

      this.get('question.choices').addObject(newChoice)
    },
    saveQuestion () {
      this.get('question').save()
    }
  }
});
