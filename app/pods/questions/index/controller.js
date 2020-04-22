import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';
import { computed } from '@ember/object';

export default Controller.extend({
  store: service(),
  queryParams: ['page', 'limit', 'filter', 'filterTagsParam'],
  page: 1,
  limit: 10,
  filter: '',
  pageCount: computed('limit', 'questions', function() {
    return Math.ceil(this.questions.meta.pagination.count / this.limit)
  }),
  tagsFilterTask: task(function * (str) {
    yield timeout(250)
    const tags = yield this.get('store').query('tag', {
      filter: {
        title: {
          $iLike: `%${str}%`
        }
      }
    })
    return tags.toArray()
  }),
  actions : {
    selectTags (tags) {
      this.set('filterTagsParam', tags.length ? tags.mapBy('id').reduce((acc, val) => acc + ',' + val) : '')
      this.set('filterTags', tags)
    },
    deleteQuestion(question) {
      question.destroyRecord()
    }
  }
});
