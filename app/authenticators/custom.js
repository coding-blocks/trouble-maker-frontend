import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';

export default Base.extend({
  api: service(),
  restore (data) {
    return Promise.resolve(data)
  },
  authenticate (code) {
    return this.get('api').request('/login/callback', {
      data: {code}
    })
  },
  invalidate () {
    return this.get('api').request('/logout')
  }
})