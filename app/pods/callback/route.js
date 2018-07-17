import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  session: service(),
  beforeModel (transition) {
    if(this.get('session.isAuthenticated')) {
      return ;
    }

    return this.get('session').authenticate('authenticator:custom', transition.queryParams.code)
  }
});
