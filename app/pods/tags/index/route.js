import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },
  model (params) {
    const {page, limit} = params
    return this.store.query('tag', {
      page: {
        offset: (page-1)*limit > 0 ? (page-1)*limit: 0,
        limit: params.limit
      }
    })
  },
  setupController (controller, model) {
    controller.set("tags", model)
  }
});
