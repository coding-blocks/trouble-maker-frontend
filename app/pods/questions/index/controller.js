import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['page', 'limit'],
  page: 1,
  limit: 10,
  actions : {
    deleteQuestion(question) {
      question.destroyRecord()
    }
  }

});
