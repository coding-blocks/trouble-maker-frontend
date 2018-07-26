import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.store.createRecord('quiz', {
      startDate: moment().format('YYYY-MM-DD HH:mm:ss'),
      endDate: moment().format('YYYY-MM-DD HH:mm:ss')
    })
  }
});
