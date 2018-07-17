import Component from '@ember/component';

/*
  Editing component for a single choice
*/

export default Component.extend({
  isEditing: false,
  actions: {
    toggleEditing () {
      this.toggleProperty('isEditing')
    },
    saveChoice () {
      this.get('choice').save().then(() => {
        this.set('isEditing', false)
      })
    },
    deleteChoice () {
      this.get('choice').destroyRecord()
    }
  }
});
