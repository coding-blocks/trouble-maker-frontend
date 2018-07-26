import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency'

export default Controller.extend({
  searchString: '',
  searchTask: task(function * () {
    yield timeout(250)

    let searchStr = this.get('searchString').trim()

    const quizzes = yield this.get('store').query('quiz', {
      filter: {
        title: {
          $iLike: `%${this.get('searchString')}%`
        }
      }
    })

    this.set('quizzes', quizzes)
  }).restartable(),
  actions: {
    deleteQuiz (quiz) {
      return quiz.destroyRecord()
    }
  }
});
