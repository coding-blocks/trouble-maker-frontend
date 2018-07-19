import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  queryParams: ['page', 'limit'],
  page: 1,
  limit: 10,
  searchString: '',
  searchTask: task(function * () {
    yield timeout(250)
    const questions = yield this.get('store').query('question', {
      include: 'user',
      page: {
        number: this.get('page'),
        limit: this.get('limit')
      },
      filter: {
        title: {
          $iLike: `%${this.get('searchString')}%`
        }
      }
    })
    this.set('page', 1)
    this.set('questions', questions)
  }).restartable()

});
