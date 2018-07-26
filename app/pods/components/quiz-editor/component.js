import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';
import { computed } from '@ember/object';

export default Component.extend({
  notify: service(),
  store: service(),
  questionFilterTask: task(function * (str) {
    yield timeout(250)
    const questions = yield this.get('store').query('question', {
      filter: {
        title: {
          $iLike: `%${str}%`
        }
      }
    })
    return questions.toArray()
  }),
  startDateMoment: computed('quiz.startDate', {
    get (key) {
      return moment(this.get('quiz.startDate'))
    },
    set (key, val) {
      this.set('quiz.startDate', val.format('YYYY-MM-DD HH:mm:ss'))
    }
  }),
  endDateMoment: computed('quiz.endDate', {
    get (key) {
      return moment(this.get('quiz.endDate'))
    },
    set (key, val) {
      this.set('quiz.endDate', val.format('YYYY-MM-DD HH:mm:ss'))
    }
  }),
  actions: {
    save () {
      const onSave = this.get('onSave')
      if (typeof onSave === 'function') {
        Promise.resolve(onSave()).then(() => {
          this.get('notify').success('Save Successful')
        })
      } else {
        throw new Error('[Component] quiz-editor: onSave attr must be a closure!')
      }
    }
  }
});
