import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  notify: service(),
  store: service(),
  questionFilterTask: task(function * (str) {
    yield timeout(250)
    const tags = yield this.get('store').query('tag', {
      filter: {
        name: {
          $iLike: `%${str}%`
        }
      }
    })
    return tags.toArray()
  }),
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
