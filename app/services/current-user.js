import { inject as service } from '@ember/service'
import Service from '@ember/service'

export default Service.extend({
  user: null,
  session: service(),
  api: service(),
  load () {
    if (this.get('session.isAuthenticated')) {
      return this.get('api').request('/users/me').then(data => {
        this.set('user', data);
      })
    }
  }
})