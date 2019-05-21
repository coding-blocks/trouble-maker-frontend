import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  queryParams: ['page', 'limit'],
  page: 1,
  limit: 10,
  searchString: '',
  searchTask: task(function * () {
    yield timeout(250)

    const tags = yield this.get('store').query('tag', {
      include: 'user',
      filter: {
        title: {
          $iLike: `%${this.get('searchString')}%`
        }
      }
    })
    this.set('page', 1)
    this.set('tags', tags)
  }).restartable(),
  actions : {
    deleteTag(tag) {
      tag.destroyRecord()
    }
  }
});
