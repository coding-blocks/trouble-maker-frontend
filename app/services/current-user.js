import { inject as service } from '@ember/service'
import Service from '@ember/service'

export default Service.extend({
  user: null,
  session: service(),
  api: service(),
  router: service(),
  load () {
    if (this.get('user.id')) {
      return this.get('user')
    }
    if (this.get('session.isAuthenticated')) {
      return this.get('api').request('/users/me').then(data => {
        if (data.role == 'ADMIN') {
          this.set('user', data);
        } else {
          this.set('user', data)
          this.get('router').transitionTo('err', 'ADMIN_ONLY')
        }
      }).catch(err => {
        this.get('session').invalidate()
      })
    }
  }
})