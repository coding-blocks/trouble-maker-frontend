import Component from '@ember/component';
import { inject as service } from '@ember/service';

/*
  Editing component for a single choice
*/

export default Component.extend({
  notify: service(),
  isEditing: false,
  actions: {
    toggleEditing () {
      this.toggleProperty('isEditing')
    },
    saveChoice () {
      this.get('choice').save().then(() => {
        this.set('isEditing', false)
        this.get('notify').success('Choice Saved Successfully!')
      })
    },
    deleteChoice () {
      const confirm = window.confirm('Delete that shit from existence?')
      if (confirm)
        this.get('choice').destroyRecord()
    },
    markAsIncorrect () {
      this.get('onFlagChange')(this.get('choice'), 'incorrect')
    },
    markAsCorrect () {
      this.get('onFlagChange')(this.get('choice'), 'correct')
    }
  }
});
