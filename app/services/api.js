import { inject as service } from '@ember/service'
import AjaxService from 'ember-ajax/services/ajax'
import config from 'trouble-maker-frontend/config/environment'
import { computed } from '@ember/object';

export default AjaxService.extend({
  session: service(),
  host: config.apiHost,
  contentType: 'application/json; charset=utf-8',
  namespace: '/api',
  headers: computed('session.data.authenticated.key', function () {
    let headers = {};
    const key = this.get('session.data.authenticated.key');
    if (key) {
      headers['Authorization'] = `Bearer ${key}`;
    }
    return headers;
  })
})