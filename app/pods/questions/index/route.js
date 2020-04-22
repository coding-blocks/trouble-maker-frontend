import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    },
    filter: {
      refreshModel: true
    },
    filterTagsParam: {
      refreshModel: true
    }
  },
  model (params) {
    const { page, limit, filter = '' } = params
    let { filterTagsParam } = params

    filterTagsParam = filterTagsParam ? filterTagsParam.split(',') : []
    
    return this.store.query('question', {
      include: 'user',
      filter: {
        title: {
          $iLike: `%${filter}%`
        },
        ...(filterTagsParam.length && {tags: filterTagsParam} )
      },
      page: {
        offset: (page-1)*limit > 0 ? (page-1)*limit: 0,
        limit: params.limit
      },
    })
  },
  setupController (controller, model) {
    controller.set("questions", model)
    controller.set("tags", model.filterTags)
  }
});
