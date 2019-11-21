import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';
import { computed } from '@ember/object';

export default Controller.extend({
  store: service(),
  queryParams: ['page', 'limit'],
  page: 1,
  limit: 10,
  searchString: '',
  pageCount: computed('limit', 'questions', function() {
    return Math.ceil(this.questions.meta.pagination.count / this.limit)
  }),
  searchTask: task(function * () {
    yield timeout(250)

    let searchStr = this.get('searchString').trim()
    let selectedTags = []

    if(this.get('filterTags')) {
      selectedTags = this.get('filterTags')
      selectedTags = selectedTags.map(t => +t.id)
    } 

    const questions = yield this.get('store').query('question', {
      include: 'user',
      filter: {
        title: {
          $iLike: `%${this.get('searchString')}%`
        },
        tags: selectedTags
      }
    })
    this.set('page', 1)
    this.set('questions', questions)
  }).restartable(),
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
    deleteQuestion(question) {
      question.destroyRecord()
    }
  }
});
