import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  notify: service(),
  actions: {
    save () {
      const onSuccess = () => this.get('notify').success('Saved Successfully')

      if (typeof this.get('onSave') === 'function') {
        this.get('onSave')().then(onSuccess)
      } else {
        this.get('tag').save().then(onSuccess)
      }
    }
  }
});
