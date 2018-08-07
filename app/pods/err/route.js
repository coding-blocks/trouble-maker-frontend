import Route from '@ember/routing/route';

const errorMsg = {
  'ADMIN_ONLY': 'You must be an admin to view this page.'
}

export default Route.extend({
  model (params) {
    return errorMsg[params.code]
  }
});
