import Component from '@ember/component';
import { inject as service } from '@ember/service';
import config from 'trouble-maker-frontend/config/environment';

export default Component.extend({
  session: service(),
  currentUser: service(),
  router: service(),
  loginUrl: `https://account.codingblocks.com/oauth/authorize?response_type=code&client_id=${config.ONEAUTH.clientID}&redirect_uri=${config.ONEAUTH.callbackURL}`,
  actions: {
    logout () {
      this.get('session').invalidate()
    }
  }
});
