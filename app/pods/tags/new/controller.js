import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveTag () {
      return this.get('tag').save().then(tag => {
        this.transitionToRoute('tags.id', tag.id)
      })
    }
  }
});
